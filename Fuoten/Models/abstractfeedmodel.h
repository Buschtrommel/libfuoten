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

#ifndef FUOTENABSTRACTFEEDMODEL_H
#define FUOTENABSTRACTFEEDMODEL_H

#include <QObject>
#include "basemodel.h"
#include "../fuoten_global.h"

namespace Fuoten {

class AbstractFeedModelPrivate;
class Feed;

/*!
 * \brief Abstract feed model that provides basic functionalities for Feed models.
 *
 * \headerfile "" <Fuoten/Models/AbstractFeedModel>
 */
class FUOTENSHARED_EXPORT AbstractFeedModel : public BaseModel
{
    Q_OBJECT
public:
    /*!
     * \brief Constructs a new empty abstract Feed model with the given \a parent.
     */
    explicit AbstractFeedModel(QObject *parent = nullptr);

    /*!
     * \brief Returns the model index of the Feed identified by \a id.
     * \param id ID of the feed to find in the model
     */
    QModelIndex findByID(qint64 id) const override;

    /*!
     * \brief Returns IDs and model indices of the Feed objects in the model defined by their ID in \a ids.
     *
     * The \a key of the hash table contains the ID of the Feed, the \a value will contain the feed's model index.
     * Only feeds will be returned of that the ID is part of the model.
     *
     * \param ids list of feed IDs to find in the model
     */
    QHash<qint64, QModelIndex> findByIDs(const QList<qint64> ids) const override;

public Q_SLOTS:
    /*!
     * \brief Populates the model with data from the local storage.
     *
     * Uses AbstractStorage::getFeeds() to get Feed objects from the local storage that will be added to the model.
     * If the BaseModel::parentId property is set to a value greater than \c -1, only feeds will be loaded that are
     * part of the folder indentified by the \a parentId property.
     */
    void load() override;

protected Q_SLOTS:
    /*!
     * \brief Takes and processes data after feeds have been requested.
     *
     * handleStorageChanged() will connect the AbstractStorage::requestedFeeds() signal to this slot.
     *
     * \param updatedFeeds  list of IDs of feeds that have been updated
     * \param newFeeds      list of IDs of feeds that are new to the local storage
     * \param deletedFeeds  list of IDs of feeds that have been deleted in the local storage (and remotely before)
     */
    void feedsRequested(const QList<qint64> &updatedFeeds, const QList<qint64> &newFeeds, const QList<qint64> &deletedFeeds);

    /*!
     * \brief Takes and processes data after a feed has been created.
     *
     * handleStorageChanged() will connect the AbstractStorage::createdFeed() signal to this slot.
     *
     * \param id        ID of the newly created feed
     * \param folderId  ID of the folder the newly created feed is part of
     */
    void feedCreated(qint64 id, qint64 folderId);

    /*!
     * \brief Takes and processes data after a feed has been deleted.
     *
     * handleStorageChanged() will connect the AbstractStorage::deletedFeed() signal to this slot.
     *
     * \param id ID of the deleted feed
     */
    void feedDeleted(qint64 id);

    /*!
     * \brief Takes and processes data after a feed has been moved to a different folder.
     *
     * handleStorageChanged() will connect the AbstractStorage::movedFeed() signal to this slot.
     *
     * \param id                ID of the moved feed
     * \param targetFolderId    ID of the folder the feed has been moved to
     */
    void feedMoved(qint64 id, qint64 targetFolderId);

    /*!
     * \brief Takes and processes data after a feed has been renamed.
     *
     * handleStorageChanged() will connect the AbstractStorage::renamedFeed() signal to this slot.
     *
     * \param id        ID of the renamed feed
     * \param newName   new name for the feed
     */
    void feedRenamed(qint64 id, const QString &newName);

    /*!
     * \brief Takes and processes data after a complete feed has been marked as read.
     *
     * handleStorageChanged() will connect the AbstractStorage::markedReadFeed() signal to this slot.
     * \param id            ID of the feed that has been marked as read
     * \param newestItemId  unused
     */
    void feedMarkedRead(qint64 id, qint64 newestItemId);

    /*!
     * \brief Takes and processes data after a complete folder has been marked as read.
     *
     * handleStorageChanged() will connect the AbstractStorage::markedReadFolder() signal to this slot.
     *
     * \param folderId      ID of the folder that has been marked as read
     * \param newestItemId  unused
     */
    void folderMarkedRead(qint64 folderId, qint64 newestItemId);

    /*!
     * \brief Takes and processes data after a folder has been deleted.
     *
     * handleStorageChanged() will connect the AbstractStorage::deletedFolder() signal to this slot.
     *
     * \param folderId ID of the folder that has been deleted
     */
    void folderDeleted(qint64 folderId);

protected:
    AbstractFeedModel(AbstractFeedModelPrivate &dd, QObject *parent = nullptr);

    /*!
     * \brief Connects the feed realted signals of AbstractStorage to the model's slots.
     */
    void handleStorageChanged() override;

    /*!
     * \brief Returns the list of Feed objects in the model.
     */
    QList<Feed*> feeds() const;

private:
    Q_DISABLE_COPY(AbstractFeedModel)
    Q_DECLARE_PRIVATE(AbstractFeedModel)
};

}

#endif // ABSTRACTFEEDMODEL_H