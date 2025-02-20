# Architectuur

## Architectuur Principes

OpenWoo.app volgt de belangrijkste architectuurprincipes binnen de Nederlandse overheid:

- [Common Ground](https://commonground.nl/): We bouwen volgens de Common Ground principes van componentisatie, API-first en hergebruik van componenten. Dit betekent dat we functionaliteit opdelen in losse, herbruikbare services die via API's met elkaar communiceren.
- [NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie/): Alle API's worden gebouwd volgens de Nederlandse API Strategie, wat zorgt voor consistente en goed gedocumenteerde interfaces.
- [GEMMA](https://www.gemmaonline.nl/): We sluiten aan bij de GEMMA architectuur voor gemeenten, met name op het gebied van zaakgericht werken en documentmanagement.
- [NORA](https://www.noraonline.nl/): De architectuur volgt de NORA principes voor de Nederlandse Overheid Referentie Architectuur.
- [HAVEN](https://www.noraonline.nl/wiki/HAVEN): We implementeren de HAVEN principes voor veilige en betrouwbare dienstverlening.
- [Forum Standaardisatie](https://forumstandaardisatie.nl/): We gebruiken de DECAT standaard voor het definiëren van publicaties, naast andere verplichte open standaarden.

## Componenten 

OpenWoo.app maakt maximaal hergebruik van bestaande Common Ground componenten:

### Kern Componenten

- **Open Connector**: Faciliteert koppelingen met onderliggende bronnen zoals zaaksystemen en DMS'en
- **Open Registers**: Slaat publicatie objecten op en beheert de levenscyclus
- **Open Catalogi**: Creëert een WOO catalogus per gemeente, levert de regie-omgeving en faciliteert federatieve zoekvragen
- **Woo website**: Tool voor het anonimiseren van documenten

Dit doen we aan de hand van configuratie, met andere woorden er is één woo speciek componten (de woo website)

open woo-app specifieke componenten (los van de aanvullende componenten die door leveranciers worden aangeboden).

### (vervangende) Website Integraties

- **Open Publicaties**: Levert een algemene zoekinterface voor burgers die zowel toepasbaar is voor de [Wet Open Overheid (WOO)](https://www.rijksoverheid.nl/onderwerpen/wet-open-overheid-woo) als [Wet Hergebruik Overheidsinformatie (WHO)](https://www.rijksoverheid.nl/onderwerpen/wet-hergebruik-overheidsinformatie) en [Wet Hergebruik Overheidsinformatie (WHO)](https://www.rijksoverheid.nl/documenten/richtlijnen/2016/02/01/handleiding-wet-hergebruik-van-overheidsinformatie).

Verschillende leveranciers bieden integraties om de WOO-voorziening in te bouwen in gemeentelijke websites:
- IO Digital
- Yard
- SIM
- OpenGemeenten

Deze integraties kunnen naast of in plaats van de Open Publicaties pagina worden gebruikt.

### Aanvullende Componenten

- **Docudesk**: Tool voor het anonimiseren van documenten
- **Taak Applicaties**: Aangeboden door IO en Yard voor het afhandelen van publicaties

## Doel van OpenWoo.app

De OpenWoo.app heeft als doel om een ecosysteem van samenwerkende componenten te bieden dat voorziet in de volgende functionaliteit

- [X] Opslag en ontsluiting van documenten en metadata middels API's;
- [X] Het indexeren van documenten en metadata, en het ontsluiten van zoekresultaten middels API's;
- [X] Het werken met (concept) publicaties
- [X] Het uploaden, registreren en publiceren van documenten en metadata door medewerkers;
- [X] Het (door)zoeken, vinden en raadplegen van documenten en metadata door burgers;
- [X] Het beheren van autorisaties, configuratie en publicaties door beheerders;
- [X] Integratie met de landelijke voorziening PLOOI/KOOP, WooGLe, Koophulpje, DSO.
- [X] Integratie met standaard gemeentelijke bronnen zoals een zaaksysteem, raadsinformatiesysteem of website
- [X] Afhandelingsflow voor zowel publiceren als Woo-verzoeken
- [X] Het kunnen terugtrekken van publicaties t.b.v herstel op procedurele fouten
- [X] Help functie voor medewerkers aan de hand van werk instructies
- [X] Interne publicaties die niet openbaar toegankelijk zijn
- [ ] (Roadmap) Generatie van documenten ten behoeve van publiceren en inhoudslijsten
- [ ] (Roadmap) Koppeling met anonimiseringssoftware
- [ ] (Roadmap) Naar PDF kunnen omzetten van documenten
- [ ] (Roadmap) Archiveren
- [ ] (Roadmap) Opslaan van zoekfilters en resultaten
- [ ] (Roadmap) Abonneren op nieuwe publicaties die voldoen aan een opgeslagen zoekfilter
- [ ] (Roadmap) Anonimiseren in de regie-interface
- [ ] (Roadmap) Advies over taalniveau
- [ ] (Roadmap) Federatieve zoekvraag

[Rest of the original content continues unchanged...]
