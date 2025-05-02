# **OpenWoo.app – Publicaties Beheer API**

Dit document beschrijft twee aparte API’s voor het beheren van publicaties:

* **Publieke API (leesrechten):** Voor het ophalen van publicaties zonder authenticatie.

* **Beheer API (ingelogd):** Voor CRUD-acties (Create, Read, Update, Delete), waarvoor Basic Auth vereist is. De benodigde inloggegevens worden geleverd door Conduction.

## **1\. Publieke API (Leesrechten)**

Deze API is bedoeld voor het ophalen van publicaties waarvoor enkel leesrechten nodig zijn. Er is geen authenticatie vereist.

### **Base URL (lees)**

```
https://[ORGANISATIENAAM].[OMGEVING].commonground.nu/index.php/apps/opencatalogi/api/
```

### **Endpoints**

* **GET Alle publicaties:**  
   **URL:** `/publications`  
   Ophaalactie voor alle beschikbare publicaties.

* **GET Eén publicatie:**  
   **URL:** `/publication/{id}`  
   Ophaalactie voor een specifieke publicatie, geïdentificeerd via het unieke `{id}`.

## **2\. Beheer API (CRUD-acties – Ingelogd)**

Voor beheerhandelingen zoals aanmaken, aanpassen of verwijderen van publicaties, dient de gebruiker ingelogd te zijn met Basic Auth. De bijbehorende credentials en slugs worden geleverd door Conduction.

De slugs zullen doorgaans de volgende conventie hanteren:

### **Base URL (beheer)**

```
https://[ORGANISATIENAAM].[OMGEVING].commonground.nu
```

###   **Authenticatie**

* **Methode:** Basic Auth

* **Credentials:** Worden verstrekt door Conduction

### **Endpoints** 

* **GET Publicaties (ingelogd):**  
  **Endpoint:**  
  `/apps/opencatalogi/api/objects/[REGISTER-SLUG]/[SCHEMA-SLUG]`   
  Hiermee kun je – mits ingelogd – alle publicaties ophalen via dezelfde endpoint.  
    
* **GET Eén publicatie (ingelogd):**  
   **Endpoint:**   
  `/apps/opencatalogi/api/objects/[REGISTER-SLUG]/[SCHEMA-SLUG]/{id}`  
* **POST Nieuwe publicatie:**  
   **Endpoint:**  
  `/apps/opencatalogi/api/objects/[REGISTER-SLUG]/[SCHEMA-SLUG]`  
   Hiermee maak je een nieuwe publicatie aan.  
   **Voorbeeld POST-body:**

```
{
  "title": "Test voor de API docu sdsdf",
  "published": "2025-04-07T22:00:00.000Z",
  "status": "Published",
  "category": "Woo-verzoeken en -besluiten",
  "catalog": "d32129e1-e87a-4c83-b5cd-5e4702412fb2",
  "publicationType": "f1510e3f-a9a8-4fe2-bf23-439942876b01",
  "organization": "257c3bc1-bb1b-4141-a48d-e2c6aeca9087",
  "register": "1",
  "schema": "1"
}
```

* **Verplichte velden:**

  * `title` (titel)  
  * `category (woo_categorie)`  
  * `published (woo_publicatiedatum)`  
  * `organisation`  
  * `catalog`  
  *   
      
* **PUT Publicatie Bijwerken:**  
   **Endpoint:** 

  `/apps/opencatalogi/api/objects/[REGISTER-SLUG]/[SCHEMA-SLUG]`

  Met dit endpoint kun je een bestaande publicatie aanpassen. **Belangrijk:** Bij een PUT-verzoek geef je alleen de velden op die je wilt aanpassen. Dit zorgt ervoor dat enkel de opgegeven velden worden bijgewerkt.

* **DELETE Publicatie:**  
   **Endpoint:**  
  `/apps/opencatalogi/api/objects/[REGISTER-SLUG]/[SCHEMA-SLUG]`

   Hiermee verwijder je een publicatie. Deze actie werkt zoals verwacht.

### **Configuratie & Validatie**

* **Status:** Dit veld is van belang voor interne controle. Bij Published wordt de publicatie openbaar. 

* **Veldwaarden:**  
   De velden `organization`, `catalog` en `publicationType` moeten overeenkomen met de klantinstellingen voor de respectievelijke schema’s die door Conduction worden aangeleverd.  
   Deze waarden zijn tevens te beheren halen via \[SCHEMA-SLUG\]:

