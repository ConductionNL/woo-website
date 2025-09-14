# Installatie

Deze installatiehandleiding is bedoeld voor overheden en leveranciers die zelfstandig aan de slag willen met OpenWoo-website. Als je OpenWoo-website als SaaS wilt afnemen, kijk dan onder [kosten](/docs/product/kosten.md).

Het template voor de OpenWoo-website is gebaseerd op de Conduction [Productpage-template](https://github.com/ConductionNL/product-website-template) voor Common Ground. Hieronder tref je een verkorte installatiehandleiding aan die vooral focust op de onderliggende bronnen. Voor meer en uitgebreidere details kun je de documentatie van het Productpage-website-template gebruiken.

## Randvoorwaarden

Om dit template te gebruiken, moet je beschikken over:

- NL Design Token voor je organisatie ([lees hier hoe je die kunt verkrijgen](https://conductionnl.github.io/product-website-template/Features/NL_Design))
- Een GitHub-organisatie en beheerdersrechten daarop OF (zie [Serverless Installatie](#serverless-installatie))
- Een APACHE/NGINX-server (zie [Server Installatie](#server-installatie))
- Een Open Webconcept CMS (WordPress) met de [OpenWoo](https://github.com/OpenWebconcept/plugin-openwoo) en [Open Convenanten](https://github.com/OpenWebconcept/plugin-openconvenanten) plugins OF
- Een losse installatie (on-premise of SaaS) met de [Woo Bundle](https://github.com/ConductionNL/WooBundle/tree/main)

## Frontend

### Serverless Installatie

De OpenWOO Website is in eerste instantie opgezet om serverless gebruikt te worden via GitHub. Dat scheelt niet alleen in de kosten, maar levert ook voordeel op in de beschikbaarheid en belasting. Simpel gezegd, de GitHub CDN is gebouwd om flink wat meer aan te kunnen dan de gemiddelde gemeente.

> **Stappen**
>
> 1. Rechtsboven deze repo staat een knop ["gebruiken als template"](https://github.com/new?template_name=woo-website-template&template_owner=ConductionNL), druk daarop (of [klik hier](https://github.com/new?template_name=woo-website-template&template_owner=ConductionNL)) en maak een nieuwe repository aan op je GitHub-organisatie.
> 2. [Zet de workflow permissions](#workflow-permissions) op `Read and write permissions`.
> 3. Ga op de main branch in de repository naar de folder `.github/workflows/`
> 4. Verwijder de workflow `product-page-deploy` als deze er nog staat
> 5. Open de workflow `woo-page-deploy` en pas de branche aan van `never` naar `main`
> 6. Pas de verdere configuratie in `woo-page-deploy` aan zoals [hieronder vermeld onder configuratie](#configuratie) en sla deze op
> 7. Ga naar acties en wacht tot de actie "Deploy the WOO Page to GitHub Pages" succesvol is afgerond
> 8. Ga naar settings -> pages, selecteer onder source `deploy from branch` en geef als branche op `gh-pages`
> 9. Bovenaan de pagina verschijnt nu de URL waarop je je Open WOO Website kunt terugvinden
> 10. Als je de Open WOO Website wilt hosten onder een subdomein van je organisatie en voorzien van een PKI-certificaat, kun je daarvoor de normale GitHub Pages-handleidingen volgen of een SLA afsluiten voor ondersteuning (zie [kosten](/docs/product/kosten.md))

#### Workflow Permissions

> **Stappen**
>
> 1. Ga naar Settings
> 2. Ga naar Actions
> 3. Ga naar General.
>
> ![settings-action](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/techniek/settings-action.png)
>
> 4. Scroll naar Workflow permissions.
> 5. Set permissions naar `Read and write permissions`.
>
> ![Workflow permissions](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/techniek/workflow-permissions.png)

### Server Installatie

Als je de OpenWoo-website liever vanaf een eigen server draait, kan dat uiteraard ook. In dat geval is er wel sprake van een ietwat ingewikkelder installatie waarvoor je beter de handleiding van het onderliggende framework kunt volgen.

> **Stappen**
>
> 1. Volg de stappen hiervoor op de [Productpage-template](https://github.com/ConductionNL/product-website-template)
> 2. Pas de configuratie aan zoals hieronder vermeld bij configuratie



## Backend

Voor de backend zijn twee opties beschikbaar. In beide gevallen moet de resulterende URL worden opgenomen onder `API_BASE_URL` in de frontend-configuratie.

### Open Webconcept met OpenWoo en Open Convenanten Plugin

In dit geval koppel je de React frontend rechtstreeks op een WordPress installatie, dat betekent dat alle publicaties handmatig moeten worden geüpload.

Volg de installatiehandleiding op [https://github.com/OpenWebconcept/plugin-openwoo](https://github.com/OpenWebconcept/plugin-openwoo) en op [https://github.com/OpenWebconcept/plugin-openconvenanten](https://github.com/OpenWebconcept/plugin-openconvenanten).

### Core Gateway met OpenWoo-Plugin

In dit geval koppel je de React frontend op een gateway installatie, dat betekent dat alle publicaties automatisch worden opgehaald uit bestaande bronnen

Volg de installatiehandleiding op [Woo Bundle](https://github.com/ConductionNL/WooBundle/tree/main).

## Externe Systemen

Voor het koppelen van externe systemen geldt dat zij op de juiste manier moeten zijn geconfigureerd. Kijk daarvoor onder [configuratie](Configuratie.md).

## Verdere documentatie

Voor verdere documentatie verwijzen we naar de [documentatie van het Productpage-template](https://conductionnl.github.io/product-website-template/).
