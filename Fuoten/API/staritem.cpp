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

#include "staritem_p.h"
#include "../error.h"
#ifdef QT_DEBUG
#include <QtDebug>
#endif

using namespace Fuoten;

StarItem::StarItem(QObject *parent) :
   Component(* new StarItemPrivate, parent)
{
}


StarItem::StarItem(qint64 feedId, const QString &guidHash, bool starred, QObject *parent) :
    Component(* new StarItemPrivate(feedId, guidHash, starred), parent)
{
}


StarItem::StarItem(StarItemPrivate &dd, QObject *parent) :
    Component(dd, parent)
{
}





void StarItem::execute()
{
    if (inOperation()) {
        qWarning("Still in operation. Returning.");
        return;
    }

#ifdef QT_DEBUG
    qDebug() << "Start to" << (starred() ? "star" : "unstar") << "the item on the remote server.";
#endif

    setInOperation(true);

    setError(nullptr);

    QStringList rl(QStringLiteral("items"));
    rl.append(QString::number(feedId()));
    rl.append(guidHash());
    if (starred()) {
        rl.append(QLatin1String("star"));
    } else {
        rl.append(QLatin1String("unstar"));
    }
    setApiRoute(rl);

    setPayload(QByteArrayLiteral("{}"));

    sendRequest();
}



bool StarItem::checkInput()
{
    if (Component::checkInput()) {

        if (feedId() <= 0) {
            //% "The feed ID is not valid."
            setError(new Error(Error::InputError, Error::Critical, qtTrId("libfuoten-err-invalid-feed-id"), QString(), this));
            setInOperation(false);
            Q_EMIT failed(error());
            return false;
        }

        if (guidHash().isEmpty()) {
            //% "The GUID hash can not be empty."
            setError(new Error(Error::InputError, Error::Critical, qtTrId("libfuoten-err-empty-guidhash"), QString(), this));
            setInOperation(false);
            Q_EMIT failed(error());
            return false;
        }

    } else {
        setInOperation(false);
        return false;
    }

    return true;
}


void StarItem::successCallback()
{
    if (storage()) {
        storage()->itemStarred(feedId(), guidHash(), starred());
    }

    setInOperation(false);

#ifdef QT_DEBUG
    qDebug() << "Successfully" << (starred() ? "starred" : "unstarred") << "the item on the remote server.";
#endif

    Q_EMIT succeeded(feedId(), guidHash(), starred());
}


void StarItem::extractError(QNetworkReply *reply)
{
    if (reply) {
        if (reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt() == 404) {
            //% "The article was not found on the server."
            setError(new Error(Error::InputError, Error::Critical, qtTrId("libfuoten-err-article-not-exists"), QString(), this));
        } else {
            setError(new Error(reply, this));
        }
    } else {
        qFatal("Invalid QNetworkReply!");
    }

    setInOperation(false);
    Q_EMIT failed(error());
}






qint64 StarItem::feedId() const { Q_D(const StarItem); return d->feedId; }

void StarItem::setFeedId(qint64 nFeedId)
{
    if (!inOperation()) {
        Q_D(StarItem);
        if (nFeedId != d->feedId) {
            d->feedId = nFeedId;
#ifdef QT_DEBUG
            qDebug() << "Changed feedId to" << d->feedId;
#endif
            Q_EMIT feedIdChanged(feedId());
        }
    } else {
        qWarning("Can not change %s while the request is in operation.", "feedId");
    }
}




QString StarItem::guidHash() const { Q_D(const StarItem); return d->guidHash; }

void StarItem::setGuidHash(const QString &nGuidHash)
{
    if (!inOperation()) {
        Q_D(StarItem);
        if (nGuidHash != d->guidHash) {
            d->guidHash = nGuidHash;
#ifdef QT_DEBUG
            qDebug() << "Changed guidHash to" << d->guidHash;
#endif
            Q_EMIT guidHashChanged(guidHash());
        }
    } else {
        qWarning("Can not change %s while the request is in operation.", "guidHash");
    }
}




bool StarItem::starred() const { Q_D(const StarItem); return d->starred; }

void StarItem::setStarred(bool nStarred)
{
    if (!inOperation()) {
        Q_D(StarItem);
        if (nStarred != d->starred) {
            d->starred = nStarred;
#ifdef QT_DEBUG
            qDebug() << "Changed starred to" << d->starred;
#endif
            Q_EMIT starredChanged(starred());
        }
    } else {
        qWarning("Can not change %s while the request is in operation.", "starred");
    }
}



