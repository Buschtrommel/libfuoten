<?xml version="1.0" ?><!DOCTYPE TS><TS language="sv" sourcelanguage="en" version="2.1">
<context>
    <name/>
    <message id="invalid-api-url">
        <location filename="../Fuoten/API/component.cpp" line="+94"/>
        <source>Invalid API URL</source>
        <translation>Ogiltig API-adress</translation>
    </message>
    <message id="err-conn-timeout" numerus="yes">
        <location line="+116"/>
        <source>The connection to the server timed out after %n second(s).</source>
        <translation><numerusform>Serveranslutningen överskred tidsgränsen efter %n sekund</numerusform><numerusform>Serveranslutningen överskred tidsgränsen efter %n sekunder</numerusform></translation>
    </message>
    <message id="id-err-no-config">
        <location line="+24"/>
        <location filename="../Fuoten/Helpers/accountvalidator.cpp" line="+68"/>
        <source>No configuration available.</source>
        <translation>Ingen konfiguration tillgänglig.</translation>
    </message>
    <message id="err-username-pass-missing">
        <location line="+7"/>
        <source>You have to specify a username and a password.</source>
        <translation>Du måste ange användarnamn och lösenord.</translation>
    </message>
    <message id="err-no-host">
        <location line="+7"/>
        <source>No host specified</source>
        <translation>Ingen värd specificerad</translation>
    </message>
    <message id="err-no-route">
        <location line="+7"/>
        <source>No API route specified.</source>
        <translation>Ingen API-rutt specificerad.</translation>
    </message>
    <message id="err-no-payloud">
        <location line="+7"/>
        <source>Empty payload when trying to perform a PUT or POST network operation.</source>
        <translation>Tom nyttolast vid försök att utföra en PUT eller POST nätverksoperation.</translation>
    </message>
    <message id="err-empty-answer">
        <location line="+26"/>
        <source>The request replied an empty answer, but there was content expected.</source>
        <translation>Begöran fick ett tomt svar i retur, fast innehåll förväntades.</translation>
    </message>
    <message id="err-no-json-array">
        <location line="+7"/>
        <source>It was expected that the request returns a JSON array, but it returned something else.</source>
        <translation>En JSON-matris förväntades som svar på begäran, men något annat returnerades.</translation>
    </message>
    <message id="err-no-json-object">
        <location line="+7"/>
        <source>It was expected that the request returns a JSON object, but it returned something else.</source>
        <translation>En JSON-objekt förväntades som svar på begäran, men något annat returnerades.</translation>
    </message>
    <message id="err-net-reply-1">
        <location filename="../Fuoten/error.cpp" line="+68"/>
        <source>The remote server at %1 refused the connection.</source>
        <translation>Fjärrservern på %1 nekade anslutning.</translation>
    </message>
    <message id="err-net-reply-2">
        <location line="+4"/>
        <source>The remote server at %1 closed the connection prematurely, before the entire reply was received and processed.</source>
        <translation>Fjärrservern på %1 stängde anslutningen i förtid, innan hela svaret hade mottagits och bearbetats.</translation>
    </message>
    <message id="err-net-reply-3">
        <location line="+4"/>
        <source>The remote host name %1 was not found.</source>
        <translation>Fjärrvärden %1 kunde inte hittas.</translation>
    </message>
    <message id="err-net-reply-4">
        <location line="+4"/>
        <source>The connection to the server at %1 timed out.</source>
        <translation>Anslutningen till %1, överskred tidsgränsen.</translation>
    </message>
    <message id="err-net-reply-5">
        <location line="+4"/>
        <source>The operation was canceled before it was finished.</source>
        <translation>Åtgärden avbröts innan den blev slutförd.</translation>
    </message>
    <message id="err-net-reply-6">
        <location line="+4"/>
        <source>The SSL/TLS handshake failed and the encrypted channel could not be established.</source>
        <translation>SSL-/TLS-handskakning misslyckades och en krypterad kanal kunde inte etableras.</translation>
    </message>
    <message id="err-net-reply-7">
        <location line="+4"/>
        <source>The connection was broken due to disconnection from the network.</source>
        <translation>Anslutningen bröts på grund av bortkoppling från nätverket.</translation>
    </message>
    <message id="err-net-reply-8">
        <location line="+4"/>
        <source>The connection was broken due to disconnection from the network or failure to start the network.</source>
        <translation>Anslutningen bröts på grund av bortkoppling från nätverket eller problem med att starta nätverket.</translation>
    </message>
    <message id="err-net-reply-9">
        <location line="+4"/>
        <source>The background request is not currently allowed due to platform policy.</source>
        <translation>Bakgrundsbegäran är för närvarande inte tillåtet, på grund av plattformspolicy.</translation>
    </message>
    <message id="err-net-reply-10">
        <location line="+5"/>
        <source>While following redirects, the maximum limit was reached.</source>
        <translation>Maxgränsen för omdirigeringar överstegs.</translation>
    </message>
    <message id="err-net-reply-11">
        <location line="+4"/>
        <source>While following redirects, the network access API detected a redirect from an encrypted protocol (https) to an unencrypted one (http).</source>
        <translation>Under pågående omdirigering identifierade nätverkets åtkomst-API en omdirigering från ett krypterat protokoll (https), till ett okrypterat (http).</translation>
    </message>
    <message id="err-net-reply-101">
        <location line="+5"/>
        <source>The connection to the proxy server was refused (the proxy server is not accepting requests).</source>
        <translation>Ansluting till proxyservern nekades (servern accepterar inte begäran).</translation>
    </message>
    <message id="err-net-reply-102">
        <location line="+4"/>
        <source>The proxy server closed the connection prematurely, before the entire reply was received and processed.</source>
        <translation>Proxyservern stängde anslutningen i förtid, innan hela svaret hade mottagits och bearbetats.</translation>
    </message>
    <message id="err-net-reply-103">
        <location line="+4"/>
        <source>The proxy host name was not found (invalid proxy hostname).</source>
        <translation>Proxyn kunde inte hittas (ogiltigt proxyvärdnamn).</translation>
    </message>
    <message id="err-net-reply-104">
        <location line="+4"/>
        <source>The connection to the proxy timed out or the proxy did not reply in time to the request sent</source>
        <translation>Anslutningen till proxyn överskred tidsgränsen, ellerproxyn svarade inte på begäran i tid.</translation>
    </message>
    <message id="err-net-reply-105">
        <location line="+4"/>
        <source>The proxy requires authentication in order to honour the request but did not accept any credentials offered (if any).</source>
        <translation>Proxyn kräver autentisering för att kunna svara på begäran, men accepterade inte inloggningsuppgifterna som skickades (om några).</translation>
    </message>
    <message id="err-net-reply-201">
        <location line="+4"/>
        <source>The access to the remote content was denied.</source>
        <translation>Åtkomst till fjärrinnehållet nekades.</translation>
    </message>
    <message id="err-net-reply-202">
        <location line="+4"/>
        <source>The operation requested on the remote content is not permitted.</source>
        <translation>Den begärda åtgärden på fjärrinnehållet, är inte tillåten.</translation>
    </message>
    <message id="err-net-reply-203">
        <location line="+4"/>
        <source>The remote content was not found at the server.</source>
        <translation>Fjärrinnehållet kunde inte hittas på servern.</translation>
    </message>
    <message id="err-net-reply-204">
        <location line="+4"/>
        <source>The remote server requires authentication to serve the content but the credentials provided were not accepted (if any).</source>
        <translation>Fjärrservern kräver autentisering för att returnera innehållet, men accepterade inte inloggningsuppgifterna som skickades (om några).</translation>
    </message>
    <message id="err-net-reply-205">
        <location line="+4"/>
        <source>The request needed to be sent again, but this failed for example because the upload data could not be read a second time.</source>
        <translation>Begäran behövde skickas igen, men detta misslyckades, möjligen på grund av att data inte kunde läsas en andra gång. </translation>
    </message>
    <message id="err-net-reply-206">
        <location line="+5"/>
        <source>The request could not be completed due to a conflict with the current state of the resource.</source>
        <translation>Begäran kunde inte slutföras, på grund av konflikt med aktuell status för resursen.</translation>
    </message>
    <message id="err-net-reply-207">
        <location line="+4"/>
        <source>The requested resource is no longer available at the server.</source>
        <translation>Den begärda resursen finns inte längre tillgänglig på servern.</translation>
    </message>
    <message id="err-net-reply-401">
        <location line="+4"/>
        <source>The server encountered an unexpected condition which prevented it from fulfilling the request.</source>
        <translation>Servern drabbades av ett oväntat tillstånd som hindrade den från att uppfylla begäran.</translation>
    </message>
    <message id="err-net-reply-402">
        <location line="+4"/>
        <source>The server does not support the functionality required to fulfill the request.</source>
        <translation>Servern stödjer inte den funktion som krävs för att uppfylla begäran.</translation>
    </message>
    <message id="err-net-reply-403">
        <location line="+4"/>
        <source>The server is unable to handle the request at this time.</source>
        <translation>Servern kan inte hantera begäran för tillfället.</translation>
    </message>
    <message id="err-net-reply-301">
        <location line="+5"/>
        <source>The Network Access API cannot honor the request because the protocol is not known.</source>
        <translation>Nätverkets åtkomst-API kan inte bistå begäran eftersom protokollet är okänt.</translation>
    </message>
    <message id="err-net-reply-302">
        <location line="+4"/>
        <source>The requested operation is invalid for this protocol.</source>
        <translation>Den begärda åtgärden är ogiltig för detta protokoll.</translation>
    </message>
    <message id="err-net-reply-99">
        <location line="+4"/>
        <source>An unknown network-related error was detected.</source>
        <translation>Ett okänt nätverksrelaterat fel har identifierats.</translation>
    </message>
    <message id="err-net-reply-199">
        <location line="+4"/>
        <source>An unknown proxy-related error was detected.</source>
        <translation>Ett okänt proxyrelaterat fel har identifierats.</translation>
    </message>
    <message id="err-net-reply-299">
        <location line="+4"/>
        <source>An unknown error related to the remote content was detected.</source>
        <translation>Ett okänt fel, relaterat till fjärrinnehållet, har identifierats.</translation>
    </message>
    <message id="err-net-reply-399">
        <location line="+4"/>
        <source>A breakdown in protocol was detected (parsing error, invalid or unexpected responses, etc.).</source>
        <translation>Ett sammanbrott i protokollet upptäcktes (tolkningsfel, ogiltig eller oväntad respons, etc.).</translation>
    </message>
    <message id="err-net-reply-499">
        <location line="+5"/>
        <location line="+5"/>
        <source>An unknown error related to the server response was detected.</source>
        <translation>Ett oväntat fel, relaterat till serversvaret har identifierats.</translation>
    </message>
    <message id="id-err-version-low-status-user">
        <location filename="../Fuoten/Helpers/accountvalidator.cpp" line="+21"/>
        <source>The version of your News App is lower than 5.2.4. Status and user information can not be queried.</source>
        <translation>Versionsnummret för din nyhets-app är lägre än 5.2.4. Status och användarinformation kan inte hämtas.</translation>
    </message>
    <message id="id-err-version-low-user">
        <location line="+22"/>
        <source>The version of your News App is lower than 6.0.5. User information can not be queried.</source>
        <translation>Versionsnummret för din nyhets-app är lägre än 6.0.5. Användarinformation kan inte hämtas.</translation>
    </message>
    <message id="err-version-not-found">
        <location filename="../Fuoten/API/getstatus.cpp" line="+102"/>
        <location filename="../Fuoten/API/getversion.cpp" line="+99"/>
        <source>Can not find the version information in the server reply.</source>
        <translation>Kan inte hitta versionsinformation i serversvaret.</translation>
    </message>
    <message id="err-warnings-not-found">
        <location line="+7"/>
        <source>Can not find the warnings information in the server reply.</source>
        <translation>Kan inte hitta varningsinformation i serversvaret.</translation>
    </message>
    <message id="err-displayname-not-found">
        <location filename="../Fuoten/API/getuser.cpp" line="+107"/>
        <source>Can not find the user&apos;s display name in the server reply.</source>
        <translation>Kan inte hitta användarens visningsnamn i serversvaret.</translation>
    </message>
    <message id="libfuoten-err-failed-open-db">
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="+69"/>
        <location line="+255"/>
        <source>Failed to open the SQLite database.</source>
        <translation>Kunde inte öppna SQLite-databasen.</translation>
    </message>
    <message id="fuoten-error-failed-execute-query">
        <location line="-243"/>
        <location line="+16"/>
        <location line="+11"/>
        <location line="+6"/>
        <location line="+20"/>
        <location line="+24"/>
        <location line="+6"/>
        <location line="+6"/>
        <location line="+6"/>
        <location line="+10"/>
        <location line="+10"/>
        <location line="+10"/>
        <location line="+10"/>
        <location line="+10"/>
        <location line="+11"/>
        <location line="+12"/>
        <location line="+16"/>
        <location line="+7"/>
        <location line="+31"/>
        <location line="+10"/>
        <location line="+65"/>
        <location line="+16"/>
        <location line="+136"/>
        <location line="+24"/>
        <location line="+26"/>
        <location line="+69"/>
        <location line="+45"/>
        <location line="+61"/>
        <location line="+49"/>
        <location line="+25"/>
        <location line="+6"/>
        <location line="+85"/>
        <location line="+48"/>
        <location line="+84"/>
        <location line="+44"/>
        <location line="+70"/>
        <location line="+44"/>
        <location line="+25"/>
        <location line="+80"/>
        <location line="+37"/>
        <location line="+44"/>
        <location line="+44"/>
        <location line="+45"/>
        <location line="+6"/>
        <location line="+36"/>
        <location line="+145"/>
        <location line="+68"/>
        <location line="+105"/>
        <location line="+87"/>
        <location line="+23"/>
        <location line="+68"/>
        <location line="+39"/>
        <location line="+15"/>
        <location line="+10"/>
        <location line="+68"/>
        <location line="+51"/>
        <location line="+46"/>
        <location line="+40"/>
        <location line="+36"/>
        <location line="+33"/>
        <location line="+98"/>
        <location line="+51"/>
        <location line="+35"/>
        <location line="+48"/>
        <location line="+17"/>
        <source>Failed to execute database query.</source>
        <translation>Kunde inte köra databasförfrågan.</translation>
    </message>
    <message id="fuoten-error-transaction-begin">
        <location line="-2523"/>
        <location line="+431"/>
        <location line="+546"/>
        <location line="+62"/>
        <location line="+841"/>
        <location line="+220"/>
        <location line="+388"/>
        <source>Failed to begin a database transaction.</source>
        <translation>Kunde inte starta en databastransaktion.</translation>
    </message>
    <message id="fuoten-error-transaction-commit">
        <location line="-2320"/>
        <location line="+335"/>
        <location line="+515"/>
        <location line="+139"/>
        <location line="+827"/>
        <location line="+143"/>
        <location line="+389"/>
        <source>Failed to commit a database transaction.</source>
        <translation>Kunde inte tillämpa en databastransaktion.</translation>
    </message>
    <message id="libfuoten-err-sqlite-db-not-ready">
        <location line="-2264"/>
        <location line="+75"/>
        <location line="+249"/>
        <location line="+117"/>
        <location line="+227"/>
        <location line="+254"/>
        <location line="+67"/>
        <location line="+37"/>
        <location line="+43"/>
        <location line="+45"/>
        <location line="+654"/>
        <location line="+24"/>
        <location line="+42"/>
        <location line="+59"/>
        <location line="+39"/>
        <location line="+39"/>
        <location line="+33"/>
        <location line="+35"/>
        <location line="+259"/>
        <location line="+34"/>
        <location line="+34"/>
        <source>SQLite database not ready. Can not process requested data.</source>
        <translation>SQLite-databasen är inte klar. Kan inte bearbeta begärd data.</translation>
    </message>
    <message id="libfuoten-err-invalid-id-type">
        <location line="-177"/>
        <source>Invalid ID type.</source>
        <translation type="unfinished"/>
    </message>
    <message id="libfuoten-err-invalid-feed-id">
        <location filename="../Fuoten/API/deletefeed.cpp" line="+91"/>
        <location filename="../Fuoten/API/markfeedread.cpp" line="+79"/>
        <location filename="../Fuoten/API/movefeed.cpp" line="+80"/>
        <location filename="../Fuoten/API/renamefeed.cpp" line="+114"/>
        <location filename="../Fuoten/API/staritem.cpp" line="+88"/>
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="-2177"/>
        <location line="+983"/>
        <location line="+37"/>
        <location line="+49"/>
        <location line="+39"/>
        <location line="+1184"/>
        <source>The feed ID is not valid.</source>
        <translation>Flödes-ID är inte giltigt.</translation>
    </message>
    <message id="libfuoten-err-empty-feed-name">
        <location filename="../Fuoten/API/renamefeed.cpp" line="+8"/>
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="-1229"/>
        <source>The feed name can not be empty.</source>
        <translation>Flödesnamnet kan inte vara tomt.</translation>
    </message>
    <message id="libfuoten-err-feed-not-exists">
        <location filename="../Fuoten/API/deletefeed.cpp" line="+38"/>
        <location filename="../Fuoten/API/markfeedread.cpp" line="+44"/>
        <location filename="../Fuoten/API/movefeed.cpp" line="+30"/>
        <location filename="../Fuoten/API/renamefeed.cpp" line="+42"/>
        <source>The feed was not found on the server.</source>
        <translation>Flödet kunde inte hittas på servern.</translation>
    </message>
    <message id="fuoten-failed-query-folders">
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="-970"/>
        <source>Failed to query the folders from the local database.</source>
        <translation>Kunde inte hämta mapparna från den lokala databasen.</translation>
    </message>
    <message id="fuoten-error-failed-prepare-query">
        <location line="-58"/>
        <location line="+159"/>
        <location line="+26"/>
        <location line="+69"/>
        <location line="+45"/>
        <location line="+111"/>
        <location line="+25"/>
        <location line="+139"/>
        <location line="+117"/>
        <location line="+70"/>
        <location line="+47"/>
        <location line="+99"/>
        <location line="+51"/>
        <location line="+43"/>
        <location line="+44"/>
        <location line="+44"/>
        <location line="+44"/>
        <location line="+486"/>
        <location line="+35"/>
        <location line="+106"/>
        <location line="+49"/>
        <location line="+47"/>
        <location line="+39"/>
        <location line="+39"/>
        <location line="+33"/>
        <location line="+90"/>
        <location line="+91"/>
        <location line="+50"/>
        <source>Failed to prepare database query.</source>
        <translation>Kunde inte förbereda databasförfrågan.</translation>
    </message>
    <message id="libfuoten-err-invalid-feed-url">
        <location filename="../Fuoten/API/createfeed.cpp" line="+81"/>
        <source>The URL of the feed is not valid.</source>
        <translation>Flödet URL är inte giltig.</translation>
    </message>
    <message id="libfuoten-err-invalid-folder-id">
        <location line="+8"/>
        <location filename="../Fuoten/API/deletefolder.cpp" line="+75"/>
        <location filename="../Fuoten/API/markfolderread.cpp" line="+81"/>
        <location filename="../Fuoten/API/movefeed.cpp" line="-22"/>
        <location filename="../Fuoten/API/renamefolder.cpp" line="+81"/>
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="-2239"/>
        <location line="+330"/>
        <location line="+111"/>
        <location line="+591"/>
        <location line="+1300"/>
        <source>The folder ID is not valid.</source>
        <oldsource>Failed to rename the folder. The folder ID is not valid.</oldsource>
        <translation>Mappens ID är inte giltigt.</translation>
    </message>
    <message id="libfuoten-err-feed-exists">
        <location line="+45"/>
        <source>The feed does already exist on the server.</source>
        <translation>Flödet finns redan på servern.</translation>
    </message>
    <message id="libfuoten-err-feed-unreadable">
        <location line="+4"/>
        <source>The feed can not be read (most likely contains errors).</source>
        <translation>Flödet kan inte läsas (innehåller troligen fel).</translation>
    </message>
    <message id="libfuoten-err-empty-folder-name">
        <location filename="../Fuoten/API/createfolder.cpp" line="+79"/>
        <location filename="../Fuoten/API/renamefolder.cpp" line="+8"/>
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="-2008"/>
        <source>The folder name can not be empty.</source>
        <oldsource>Failed to rename the folder. The new folder name is empty.</oldsource>
        <translation>Mappnamnet kan inte vara tomt.</translation>
    </message>
    <message id="libfuoten-err-no-folders-array-in-reply">
        <location line="+22"/>
        <location filename="../Fuoten/API/getfolders.cpp" line="+98"/>
        <source>The data the server replied does not contain a &quot;folders&quot; array.</source>
        <translation>Serversvarets data innehåller ingen mappmatris.</translation>
    </message>
    <message id="libfuoten-err-folder-name-exists">
        <location line="+23"/>
        <location filename="../Fuoten/API/renamefolder.cpp" line="+42"/>
        <source>The folder name does already exist on the server.</source>
        <oldsource>Failed to rename the folder. The new folder name does already exist on the server.</oldsource>
        <translation>Mappnamnet finns redan på servern.</translation>
    </message>
    <message id="libfuoten-err-folder-not-exists">
        <location filename="../Fuoten/API/deletefolder.cpp" line="+38"/>
        <location filename="../Fuoten/API/markfolderread.cpp" line="+44"/>
        <location filename="../Fuoten/API/renamefolder.cpp" line="+4"/>
        <source>The folder was not found on the server.</source>
        <oldsource>Failed to rename the folder. The folder to rename was not found on the server.</oldsource>
        <translation>Mappen kunde inte hittas på servern.</translation>
    </message>
    <message id="libfuoten-err-folder-invalid-name">
        <location filename="../Fuoten/API/createfolder.cpp" line="+4"/>
        <location filename="../Fuoten/API/renamefolder.cpp" line="+4"/>
        <source>The folder name is invalid (for instance empty).</source>
        <oldsource>Failed to rename the folder. The new folder name is invalid (for instance empty).</oldsource>
        <translation>Mappnamnet är ogiltigt (kanske tomt?).</translation>
    </message>
    <message id="libfuoten-err-invalid-item-id">
        <location filename="../Fuoten/API/markallitemsread.cpp" line="+79"/>
        <location filename="../Fuoten/API/markfeedread.cpp" line="-36"/>
        <location filename="../Fuoten/API/markfolderread.cpp" line="-36"/>
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="+796"/>
        <location line="+1184"/>
        <location line="+34"/>
        <source>The item ID is not valid.</source>
        <translation>Objekt-ID är inte giltig.</translation>
    </message>
    <message id="libfuoten-err-no-feeds-array-in-reply">
        <location filename="../Fuoten/API/createfeed.cpp" line="-27"/>
        <location filename="../Fuoten/API/getfeeds.cpp" line="+95"/>
        <source>The data the server replied does not contain a &quot;feeds&quot; array.</source>
        <translation>Serverns svarsdata innehåller ingen flödesmatris.</translation>
    </message>
    <message id="libfuoten-err-no-items-array-in-reply">
        <location filename="../Fuoten/API/getitems.cpp" line="+121"/>
        <location filename="../Fuoten/API/getupdateditems.cpp" line="+110"/>
        <source>The data the server replied does not contain an &quot;items&quot; array.</source>
        <translation>Serverns svarsdata innehåller ingen objektmatris.</translation>
    </message>
    <message id="libfuoten-error-invalid-id">
        <location line="+24"/>
        <location filename="../Fuoten/API/getupdateditems.cpp" line="+32"/>
        <source>Invalid ID</source>
        <translation>Ogiltigt ID</translation>
    </message>
    <message id="libfuoten-error-invalid-time">
        <location filename="../Fuoten/API/getupdateditems.cpp" line="-8"/>
        <source>Invalid last modified time.</source>
        <translation>Ogiltig tidsstämpel (senast ändrad)</translation>
    </message>
    <message id="libfuoten-tody">
        <location filename="../Fuoten/article_p.h" line="+119"/>
        <source>Today</source>
        <translation>I dag</translation>
    </message>
    <message id="libfuoten-yesterday">
        <location line="+3"/>
        <source>Yesterday</source>
        <translation>I går</translation>
    </message>
    <message id="libfuoten-short-date-format">
        <location line="+5"/>
        <source>d. MMMM</source>
        <translation>d. MMMM</translation>
    </message>
    <message id="libfuoten-long-date-format">
        <location line="+3"/>
        <source>d. MMM yyyy</source>
        <translation>d. MMM yyyy</translation>
    </message>
    <message id="libfuoten-time-format">
        <location line="+4"/>
        <source>hh:mm</source>
        <translation>hh:mm</translation>
    </message>
    <message id="libfuoten-err-invalid-article-id">
        <location filename="../Fuoten/API/markitem.cpp" line="+88"/>
        <source>The article ID is not valid.</source>
        <translation>Artikel-ID är inte giltig.</translation>
    </message>
    <message id="libfuoten-err-article-not-exists">
        <location line="+36"/>
        <location filename="../Fuoten/API/staritem.cpp" line="+44"/>
        <source>The article was not found on the server.</source>
        <translation>Artikeln kan inte hittas på servern.</translation>
    </message>
    <message id="libfuoten-err-empty-id-list">
        <location filename="../Fuoten/API/markmultipleitems.cpp" line="+98"/>
        <source>The list of IDs to mark is empty.</source>
        <translation>Listan över ID att märka, är tom.</translation>
    </message>
    <message id="libfuoten-err-empty-guidhash">
        <location filename="../Fuoten/API/staritem.cpp" line="-36"/>
        <source>The GUID hash can not be empty.</source>
        <translation>GUID-hash kan inte vara tom.</translation>
    </message>
    <message id="libfuoten-err-articles-star-unstar-list">
        <location filename="../Fuoten/API/starmultipleitems.cpp" line="+102"/>
        <source>The list of articles to star/unstar can not be empty.</source>
        <translation>Listan över artiklar att stärnmärka/avmarkera kan inte vara tom.</translation>
    </message>
</context>
</TS>