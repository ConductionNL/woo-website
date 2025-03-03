# Beveiliging

Wij geloven in het integreren van beveiliging in de kern van ons ontwikkelingsproces. We maken gebruik van geautomatiseerde penetratietesten en scanning als onderdeel van onze Continuous Integration en Continuous Deployment (CI/CD) pipeline. Deze aanpak stelt ons in staat om mogelijke beveiligingskwetsbaarheden vroegtijdig te identificeren en aan te pakken, tijdens de ontwikkelingsfase in plaats van later in de productiefase.

## Design Principes
Goede beveiliging begint bij het ontwerp, dat geld zeker voor de Woo. We hebben er dan ook bewust voor gekozen om van de Woo index en publicatie platform een apparte applicatie te maken ten opzichte van de afhandel applicatie voor Woo verzoeken en annonimeserings tool.

We hebben daardoor als design principe kunnen afspreken dat de index géén persoon gegeven mag bevatten. Ofwel alleen maar gegevens die daadwerkelijk mogen worden gepubliceerd. Hiermee geven we ultieme invulling aan het concept dataminimalisatie.

Een tweede design principe betreft bronnen, vanuit bronnen willen we alleen publieke informatie ontvangen. Hierop moet de bron een harde garantie kunnen afgeven aan de hand van autorisatie en filtering. Op deze manier voorkomen we per abuis toch persoons informatie kunnen ophalen.

Als derde principe hanteren we dat de index bij de bevraging op een individueel object altijd de data live bij de bron moet ophalen. Dit betekend los van data bij de bron ook dat in het geval van een interventie (vernietiging van een document omdat er per abuis persoons gegevens zijn opgenomen) dit document per direct niet meer kan worden uitgeleverd aan de voorkant.

Als vierde zou een bron altijd IP whitelisting moeten toepassen op de bevraging vanuit de OpenWoo service, zodat een eventueel ontvreemde authorisatie sleutel niet elders kan worden gebruikt. Gezamenlijk met filtering en sleutels formt dit de kern van onze multy layerd defence strategie.

Gezamenlijk minimaliseren we op deze manier het risco bij een eventueel lek, in het meest extreme geval zou de volledige index en alle authorisatie sleutels kunnen worden onvreemd maar zou hierbij alsnog geen data worden verloren die niet reeds tot het publieke domein behoord.



## Als onderdeel van de development
Onze CI/CD-pipeline bevat ook geautomatiseerde scannertools die onze broncode, containers en cloud-infrastructuur controleren op beveiligingsproblemen.
Broncodescanners analyseren onze code om beveiligingszwaktes te vinden, zoals die vermeld staan in de [OWASP](https://owasp.org/) Top 10-lijst van veelvoorkomende beveiligingsrisico's.
Containerscanners inspecteren onze Docker- en andere containerimages op kwetsbaarheden, verkeerde configuraties en naleving van best practices. Dit sluit aan bij onze inzet om te voldoen aan de top tien tips voor containerbeveiliging.
Cloudbeveiligingsscanners zorgen ervoor dat onze cloud-infrastructuur veilig is geconfigureerd, in overeenstemming met het principe van minimale rechten en andere best practices voor cloudbeveiliging.

## Gedurende productie
Security is echter geen 'one time' ding dat je eenmalig opzet, het vraagt continu aandacht en zorg. [Conduction](/docs/Community/Bijdragen) neemt hier als beheerder van de code base verantwoordenlijkheid voor door het automatisch *dagenlijks* pentesten van zowel de productie als accepatie omgeving. Hierbij worden frontend en api los getest.
De resultaten van deze tests worden vervolgens gebruikt om onze ontwikkelings- en beveiligingsteams te informeren over mogelijke kwetsbaarheden. Dit proces stelt ons in staat om deze kwetsbaarheden aan te pakken voordat de software wordt ingezet naar productie.
## Zelf testen
- Internet.nl



## Scannen


## Naleving van de Top Tien Tips voor Containerbeveiliging

Om een robuuste beveiliging te waarborgen, houden we ons aan de top tien tips voor containerbeveiliging. Hier zijn enkele van de praktijken die we volgen:

* **Gebruik minimale basisimages:** We nemen alleen de noodzakelijke services en componenten op in onze containerimages om het aanvalsoppervlak te verminderen.
* **Beheer geheimen veilig:** We slaan geen gevoelige informatie zoals wachtwoorden, API-sleutels of geheime tokens op in onze containerimages. In plaats daarvan maken we gebruik van veilige tools voor geheimenbeheer.
* **Gebruik containers met niet-rootrechten:** We laten onze containers draaien als niet-rootgebruikers, waar mogelijk, om de potentiële schade te beperken als een container gecompromitteerd raakt.
* **Regelmatig bijwerken en patchen van containers:** We houden onze containers up-to-date met de nieuwste beveiligingspatches.
* **Scannen van images op kwetsbaarheden:** Zoals hierboven vermeld, maken we gebruik van geautomatiseerde tools om onze containerimages te scannen op bekende kwetsbaarheden.
* **Beperken van het gebruik van systeembronnen:** We maken gebruik van beveiligingsfuncties van container-runtime om de hoeveelheid systeembronnen die een container kan gebruiken, te beperken.
* **Gebruik van netwerksegmentatie:** We isoleren onze containers in afzonderlijke netwerksegmenten om laterale beweging te beperken in geval van een inbreuk.
* **Implementeren van sterke authenticatie- en autorisatiecontroles:** We zorgen ervoor dat alleen geautoriseerde personen toegang hebben tot onze containers en de gegevens daarin.
* **Monitoren en loggen van containeractiviteit:** We verzamelen en analyseren logs van onze containers om verdachte activiteiten te detecteren.
* **Zorgen voor onveranderlijkheid en het onderhouden van een effectieve CI/CD-pipeline:** Onze containers zijn ontworpen om onveranderlijk te zijn, wat betekent dat ze niet worden bijgewerkt of gepatcht zodra ze zijn ingezet. In plaats daarvan worden wijzigingen aangebracht in het containerimage en wordt een nieuwe versie van de container ingezet via onze CI/CD-pipeline.

Door beveiliging te integreren in ons ontwikkelingsproces streven we ernaar een veilige, betrouwbare omgeving te creëren voor onze software en diensten.

## Gebruikersauthenticatie

We implementeren gebruikersauthenticatie via OAuth of Active Directory Federation Services (ADFS). ADFS is een softwarecomponent ontwikkeld door Microsoft die gebruikers voorziet van single sign-on toegang tot systemen en applicaties die zich bevinden over organisatorische grenzen heen.

Gebruikers authenticeren zich eerst via OAuth/ADFS, die vervolgens een reeks claims produceert die de gebruiker identificeren. Deze claims worden vervolgens gebruikt door de OpenCatalogi-applicatie, die ze gebruikt om te beslissen of de gebruiker toegang en rollen krijgt (zie RBAC). Dit systeem vereenvoudigt het aanmeldingsproces voor gebruikers en maakt veilige authenticatie mogelijk over verschillende systemen en applicaties.

## Identificatie op basis van Two-Way SSL

De identificatie in ons gefedereerde netwerk is gebaseerd op Two-Way SSL (Secure Sockets Layer) certificaten, in overeenstemming met het Nederlandse PKI (Public Key Infrastructure) systeem. Deze aanpak zorgt voor een beveiligd en vertrouwd communicatiekanaal tussen de software en de catalogus.

Het two-way SSL-authenticatiemechamedianisme vereist dat zowel de client als de server elkaars openbare certificaten presenteren en accepteren voordat er communicatie kan plaatsvinden. Dit proces garandeert de identiteit van zowel de client als de server, en zorgt voor een hoog niveau van beveiliging en vertrouwen in de communicatie.

## Gegevensbeveiligingsniveaus

Ons systeem behandelt verschillende soorten gegevens, elk met verschillende beveiligingsniveaus:

* **Openbare gegevens:** Deze gegevens zijn beschikbaar voor alle gebruikers en bevatten geen gevoelige informatie. Hoewel ze openbaar zijn, nemen we nog steeds maatregelen om de integriteit en beschikbaarheid ervan te waarborgen.

* **Gegevens beschikbaar voor gespecificeerde organisaties:** Sommige gegevens zijn alleen toegankelijk voor bepaalde organisaties. We implementeren strikte toegangscontroles en authenticatiemethoden om ervoor te zorgen dat alleen geautoriseerde organisaties toegang hebben tot deze gegevens.

* **Gegevens alleen beschikbaar voor de eigen organisatie:** Bepaalde gegevens zijn strikt intern en alleen toegankelijk voor onze organisatie. Deze gegevens zijn beschermd door meerdere beveiligingslagen en kunnen alleen worden geopend door geauthenticeerd en geautoriseerd personeel binnen onze organisatie.

* **Gebruikersspecifieke gegevens:** Sommige gegevens zijn gepersonaliseerd en alleen beschikbaar voor specifieke gebruikers. Deze gegevens worden beschermd door strikte toegangscontroles en versleuteling. Alleen de specifieke gebruiker en geautoriseerd personeel binnen onze organisatie kunnen toegang krijgen tot deze gegevens.

* We nemen gegevensbeveiliging zeer serieus en hebben robuuste maatregelen geïmplementeerd om de veiligheid, vertrouwelijkheid, integriteit en beschikbaarheid van alle gegevens in ons systeem te waarborgen.

## Scheiding van Landingzone, Executionzone en Data

In onze opstelling maken we gebruik van NGINX- en PHP-containers om een duidelijke scheiding van verantwoordelijkheden te waarborgen tussen internet/netwerktoegang, code-uitvoering en gegevensopslag. Deze ontwerpbenadering bevordert een robuuste beveiliging en verbeterde beheerbaarheid van onze applicaties en diensten.

* **NGINX-containers als Landing Zone:** De eerste laag van onze architectuur bestaat uit NGINX-containers die dienen als een landing zone. NGINX is populaire open-source software die wordt gebruikt voor webserver, omgekeerde proxy, caching, load balancing en mediaserving, onder andere. In onze context gebruiken we het voornamelijk als een omgekeerde proxy en load balancer. Wanneer een verzoek binnenkomt vanaf het internet, komt het eerst bij de NGINX-container terecht. De rol van deze container is het verwerken van netwerkverkeer vanaf het internet, het uitvoeren van de nodige load balancing en het veilig doorsturen van verzoeken naar de juiste toepassingscontainers. Deze opstelling beschermt onze toepassingscontainers tegen directe blootstelling aan het internet en verbetert onze beveiligingspositie.

* **PHP-containers als Execution Zone:** Nadat een verzoek is doorgestuurd door de NGINX-container, komt het terecht in de juiste PHP-container voor verwerking. Deze containers dienen als onze uitvoeringszone, waar toepassingslogica wordt uitgevoerd. Elke PHP-container draait een exemplaar van onze toepassing. Door de uitvoeringsomgeving op deze manier te isoleren, kunnen we ervoor zorgen dat problemen of kwetsbaarheden binnen één container geen invloed hebben op andere. Deze encapsulatie biedt een aanzienlijk beveiligingsvoordeel en maakt het gemakkelijker om individuele componenten van onze toepassing te beheren en schalen.

* **Gegevensopslag buiten de cluster:** Voor gegevensopslag hanteren we de strategie om gegevens buiten de cluster te bewaren. Deze aanpak scheidt gegevens van de uitvoeringsomgeving en de netwerktoegangslaag, en biedt een extra beveiligingslaag. Gegevens die buiten de cluster zijn opgeslagen, kunnen grondig worden beschermd met specifieke beveiligingscontroles, versleuteling en back-upprocedures, onafhankelijk van de toepassing en netwerklagen.

Deze driedelige benadering - NGINX-containers voor netwerktoegang, PHP-containers voor code-uitvoering en externe opslag voor gegevens - biedt ons een beveiligde, schaalbare en veerkrachtige architectuur. Het stelt ons in staat potentiële problemen te isoleren en elke laag onafhankelijk te beheren, waardoor onze mogelijkheid om onze diensten te onderhouden en te beveiligen wordt verbeterd.

* **Penetratietesten:** 
[auditresultaten](docs/src/file/PENTESt-Rapportage.pdf) bekijken.


# Toegankelijkheid

De OpenWoo.app streeft ernaar om Woo (pagina's) toegankelijk te maken voor een zo breed mogelijk publiek, ongeacht technologie of vermogen. Er daarom actief gewerkt aan het verhogen van de toegankelijkheid en bruikbaarheid van de React frontend en deze is gehouden aan veel van de beschikbare standaarden en richtlijnen.

Deze oplossing streeft ernaar te voldoen aan niveau AA van de Web Content Accessibility Guidelines (WCAG 2.1). Deze richtlijnen leggen de basis voor het toegankelijk maken van webinhoud voor mensen met een scala aan beperkingen, waaronder visuele, auditieve, motorische en cognitieve beperkingen.

Hiervoor is voortdurende evaluatie en verbetering van de toegankelijkheidspraktijken nodig om ervoor te zorgen dat OpenWoo.app inclusief en toegankelijk is voor iedereen. Voor een gedetailleerd overzicht van de toegankelijkheidsinspanningen en -resultaten, kunt u de [auditresultaten](docs/src/file/WCAG-Raportage.pdf) bekijken.

