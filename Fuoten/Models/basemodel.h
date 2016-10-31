/* libfuoten - Qt based library to access the ownCloud/Nextcloud News App API
 * Copyright (C) 2016 Buschtrommel / Matthias Fehring
 * https://www.buschmann23.de/entwicklung/bibliotheken/libfuoten/
 * https://github.com/Buschtrommel/libfuoten
 *
 * This library is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library.  If not, see
 * <http://www.gnu.org/licenses/>.
 */

#ifndef FUOTENBASEMODEL_H
#define FUOTENBASEMODEL_H

#include <QObject>
#include <QAbstractItemModel>
#include "../fuoten_global.h"

namespace Fuoten {

class BaseModelPrivate;
class AbstractStorage;

/*!
 * \brief Abstract base class for all data models.
 *
 * \headerfile "" <Fuoten/Models/BaseModel>
 */
class FUOTENSHARED_EXPORT BaseModel : public QAbstractItemModel
{
    Q_OBJECT
    /*!
     * \brief Returns true while the model is loading data.
     *
     * \par Access functions:
     * <TABLE><TR><TD>bool</TD><TD>inOperation() const</TD></TR></TABLE>
     * \par Notifier signal:
     * <TABLE><TR><TD>void</TD><TD>inOperationChanged(bool inOperation)</TD></TR></TABLE>
     *
     * \sa setInOperation()
     */
    Q_PROPERTY(bool inOperation READ inOperation WRITE setInOperation NOTIFY inOperationChanged)
    /*!
     * \brief Pointer to a class derived from AbstractStorage.
     *
     * \par Access functions:
     * <TABLE><TR><TD>AbstractStorage*</TD><TD>storage() const</TD></TR><TR><TD>void</TD><TD>setStorage(AbstractStorage *nStorage)</TD></TR></TABLE>
     * \par Notifier signal:
     * <TABLE><TR><TD>void</TD><TD>storageChanged(AbstractStorage *storage)</TD></TR></TABLE>
     */
    Q_PROPERTY(Fuoten::AbstractStorage *storage READ storage WRITE setStorage NOTIFY storageChanged)
    /*!
     * \brief Sets the parent database ID to load feeds/items for.
     *
     * If used on a model presenting feeds, this defines the folder, the feed belongs to. If used on a model
     * presenting items, this defines the feed the items belong to.
     *
     * \par Access functions:
     * <TABLE><TR><TD>qint64</TD><TD>parentId() const</TD></TR><TR><TD>void</TD><TD>setParentId(qint64 nParentId)</TD></TR></TABLE>
     * \par Notifier signal:
     * <TABLE><TR><TD>void</TD><TD>parentIdChanged(qint64 parentId)</TD></TR></TABLE>
     */
    Q_PROPERTY(qint64 parentId READ parentId WRITE setParentId NOTIFY parentIdChanged)
    /*!
     * \brief Stores the parent ID as double to make it accesseable from QML.
     *
     * This uses the same data as parentId, but converts it between double and qint64. This is a convenience property for use in QML
     * that does not support 64bit integers. As JavaScript and JSON are storing number values according to IEEE 754, there might happen
     * an overflow, if setting values greater than the limit of qint64. Under normal circumstances we simply assume, that there will hardly
     * be greater database IDs than what fits in qint64.
     *
     * \par Access functions:
     * <TABLE><TR><TD>double</TD><TD>doubleParentId() const</TD></TR><TR><TD>void</TD><TD>setDoubleParentId(double nDoubleParentId)</TD></TR></TABLE>
     * \par Notifier signal:
     * <TABLE><TR><TD>void</TD><TD>doubleParentIdChanged(double doubleParentId)</TD></TR></TABLE>
     */
    Q_PROPERTY(double doubleParentId READ doubleParentId WRITE setDoubleParentId NOTIFY doubleParentIdChanged)
public:
    /*!
     * \brief Constructs a new BaseModel object.
     */
    explicit BaseModel(QObject *parent = nullptr);

    /*!
     * \brief Deconstructs the BaseModel object.
     */
    ~BaseModel();

    /*!
     * \brief Returns the model index of the item identified by database ID.
     *
     * The default implementation returns an invalid QModelIndex. Reimplement this function
     * in a subclass.
     */
    virtual QModelIndex findByID(qint64 id) const;

    /*!
     * \brief Returns a hash-table containing IDs and their model index fount in the model.
     *
     * The default implementation return an empty QHash<qint64, QModelIndex>. Reimplement this
     * function in a subclass.
     */
    virtual QHash<qint64, QModelIndex> findByIDs(const QList<qint64> ids) const;


    /*!
     * \brief Returns true while the model is loading data.
     * \sa inOperation
     */
    bool inOperation() const;

    /*!
     * \brief Returns the pointer to the currently set local storage.
     * \sa storage
     */
    AbstractStorage *storage() const;

    /*!
     * \brief Returns the currently set parent ID.
     * \sa parentId
     */
    qint64 parentId() const;

    /*!
     * \brief Returns the currently set parent ID as double.
     * This function is for use in QML, that does not support 64bit integers. It performs a static cast from
     * the saved qint64 parent ID to double.
     * \sa doubleParentId
     */
    double doubleParentId() const;

    /*!
     * \brief Sets the pointer to the local storage handler.
     * \sa storage
     */
    void setStorage(AbstractStorage *nStorage);

    /*!
     * \brief Set the parent ID.
     * \sa parentId
     */
    void setParentId(qint64 nParentId);

    /*!
     * \brief Sets the parent ID via a double.
     * This function is for use in QML, that does not support 64bit integers. It performs a static cast from
     * the double to a qint64 to save it.
     * \sa doubleParentId
     */
    void setDoubleParentId(double nDoubleParentId);

public Q_SLOTS:
    /*!
     * \brief Loads the model data.
     *
     * Reimplement this in a subclass. Do only load the data, if loaded() returns false and
     * set setLoaded() to true after the data has been loaded. All later changes, after the model
     * has loaded the initial data, should be done by signals and slots without reloading the full
     * model.
     *
     * Additionally you could use the \link BaseModel::inOperation inOperation \endlink property in this function to indicate, that the model
     * is loading its data.
     *
     * \par Example implementation
     *
     * \code{.cpp}
     *
     * void AbstractFolderModel::load()
     * {
     *     if (!storage()) {
     *         return;
     *     }
     *
     *     if (!storage()->ready() || loaded()) {
     *         return;
     *     }
     *
     *     setInOperation(true);
     *
     *     Q_D(AbstractFolderModel);
     *
     *     const QList<Folder*> fs = storage()->getFolders(FuotenEnums::Name, Qt::AscendingOrder);
     *     if (!fs.isEmpty()) {
     *         beginInsertRows(QModelIndex(), 0, fs.count() - 1);
     *         d->folders = fs;
     *         endInsertRows();
     *     }
     *
     *     setLoaded(true);
     *     setInOperation(false);
     * }
     * \endcode
     */
    virtual void load() = 0;

Q_SIGNALS:
    /*!
     * \brief This signal is emitted if the operational state of the model changes.
     * \sa inOperatoin
     */
    void inOperationChanged(bool inOperation);

    /*!
     * \brief This signal is emitted if the poiner to the local storage changes.
     * \sa storage
     */
    void storageChanged(AbstractStorage *storage);

    /*!
     * \brief This signal is emitted if the parent ID changes.
     * \sa parentId
     */
    void parentIdChanged(qint64 parentId);

    /*!
     * \brief This signal is emitted if the parent ID changes.
     * \sa doubleParentId
     */
    void doubleParentIdChanged(double doubleParentId);


protected:
    const QScopedPointer<BaseModelPrivate> d_ptr;
    BaseModel(BaseModelPrivate &dd, QObject *parent = nullptr);

    /*!
     * \brief Sets the inOperation property.
     *
     * \sa inOperation
     */
    void setInOperation(bool nInOperation);

    /*!
     * \brief Will be called by setStorage() whenever the storage changes.
     *
     * The default implementation does nothing. You should use this to connect
     * signals from the AbstractStorage to slots in the model implementation that
     * updates the model data after the local data has been changed.
     *
     * \par Example implementation
     *
     * \code{.cpp}
     * void AbstractFolderModel::handleStorageChanged()
     * {
     *     AbstractStorage *s = storage();
     *     connect(s, &AbstractStorage::readyChanged, this, &AbstractFolderModel::load);
     *     connect(s, &AbstractStorage::requestedFolders, this, &AbstractFolderModel::foldersRequested);
     *     connect(s, &AbstractStorage::renamedFolder, this, &AbstractFolderModel::folderRenamed);
     *     connect(s, &AbstractStorage::createdFolder, this, &AbstractFolderModel::folderCreated);
     *     connect(s, &AbstractStorage::deletedFolder, this, &AbstractFolderModel::folderDeleted);
     *     connect(s, &AbstractStorage::markedReadFolder, this, &AbstractFolderModel::folderMarkedRead);
     * }
     *
     * \endcode
     */
    virtual void handleStorageChanged();

    /*!
     * \brief Returns true if the model has initially loaded its data.
     *
     * \sa setLoaded()
     */
    bool loaded() const;

    /*!
     * \brief Set this to true if the model has initially loaded its data.
     *
     * In the implementation of a BaseModel this should be set in the implementation of the load() function,
     * after the initial data has been loaded.
     *
     * \sa loaded()
     */
    void setLoaded(bool loaded);

private:
    Q_DISABLE_COPY(BaseModel)
    Q_DECLARE_PRIVATE(BaseModel)

};

}


#endif // FUOTENBASEMODEL_H
