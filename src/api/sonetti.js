const sonetti = [
  {
    "title": "Bacio",
    "testo":
      "E guardo all amore, spiga di grano \n Guardo al mondo che gira malsano\n Penso al tuo abbraccio rassicurante\n Penso a me stesso, tenero amante\n\n Canto all amore senza illusione\n Sento tua voce come canzone\n Guardo tuo volto come dipinto\n Sono sicuro che non sia finto\n\n Sento la voglia di correre via\n Senza più alcuna malinconia\n Intrappolato nella fantasia\n\n Della nostra forza nel sognare\n Della nostra voglia di volare\n Del nostro amore da conservare",
  },
  {
    "title": "Viaggio a levante",
    "testo":
      "Sbagli di freno, stride il motore\nTroppo precoce nel nostro cuore\nCadi veloce, atterri di quarto\nSquilla il telefono, ansia da parto\n\nCorri spedito, nessuno ti afferra\nRischi sempre, mai cadi a terra\nMa in quella giornata a luce funesta\nSul viso ti cadde una triste brezza\n\nSe in misericordia il Cielo é potente\nSe la preghiera è arma vincente\nAnche tu riposi lì beatamente\n\nE se ci guardi e ancora piangiamo\nNon ti crucciare, ancora ti amiamo\nÈ un arrivederci, ormai lo sappiamo",
  },
  {
    "title": "Palloncino",
    "testo":
      "Corrono bambini, giochi di spago\nRisate eccheggiano ormai da lontano\nE se si guarda al tempo che fu\nE se si mira il Cielo di blu\n\nCi si ricorda della fanciullezza\nFresca nell anima come la brezza\nE se per ridere bastava un niente\nCrescendo si impara quando\nè conveniente\n\nSe per gioire è quindi necessario\nRicordarsi le lacrime di un rosario\nDi una mamma che ti aspettava\n\nDi un padre che un poco sgridava\nDi un pallone che corre via\nDel perduto calore di infanzia mia",
  },
  {
    "title": "Newton",
    "testo":
      "Siedi fecondo ai piedi un ramo\nE mentre indugi nel tuo pensier vago\nLa provvidenza con volto fiorito\nFece cadere un frutto proibito\n\nE se l&aposintuizione fu cosa onesta\nProdigio vero si ebbe in richiesta\nDi applicare sapere innovato\nDi sperimentare qualcosa inventato\n\nE se voliamo nei cieli sereni\nE se pesiamo i nostri averi\nE se studiamo dalle lavagne\n\nMerito tuo e del frutto cascante\nDel tuo pensiero fisso e distante\nE di quel ciel che ti volle brillante",
  },
  {
    "title": "Cavaliere",
    "testo":
      "Vedo nel braccio scudo potente\nGiornata a difendere povera gente\nLa tua ricompensa è pari a niente\nPerché il tuo cuore è acciaio splendente\n\nE se la tua spada è solo intrapresa\nDalla necessità sempre dipesa\nVolgi lo sguardo e qui scuoti il capo\nA chi oggi ti vede e pensa: villano!\n\nParlare di vero, di sconveniente\nAgire distinto, agire prudente\nPensare cristiano, pensare ortodosso\n\nOra che il giusto è un mare mosso\nOra che il Cielo é un opinione\nOra che si discute del colore del sole",
  },
  {
    "title": "Scacchi",
    "testo":
      "Muovi di donna con taglio angolare\nTocco in difesa, re da spostare\nE mentre gusti la tua vittoria\nRicordi che ancora ne manca la gloria\n\nSe questo è un gioco da finalizzare\nE qui non basta spostar le dame\nSe questo scacco è nelle tue brame\nServe talento per evitare\n\nChe in quello stallo che si palesa\nPer quella rocca si ben difesa\nTu perda tempo e perda partita\n\nE ti ricordi di come la vita\nTanto diversa forse non pare\nServe l&aposingegno per poi scalare",
  },
  {
    "title": "Trekking",
    "testo":
      "Non è pensiero, non è vanità\nNon è ricerca non è maestà\nNon è lo sforzo non è la paura\nNon è il rifiuto di vita sicura\n\nÈ solo voglia di continuare\nDi scoprire e di esplorare\nCercare me stesso nella salita\nCapire come in questa vita\n\nPiù si va in alto più si va solo\nPiù ci distacca dal lontano suolo\nE Più si vola nella sapienza\n\nE si abbandona la convenienza\nCosì grigia di questo mondo\nSentendosi solo in questo tramonto",
  },
  {
    "title": "Annunciazione",
    "testo":
      "Riposo felice nella mia fortuna\nAndrò a vedere una donna di luna\nE poiché sola tu sei giovamento\nGiusta corona ti è il firmamento\n\nQuanto sei bella in dolce attesa\nTorre di Davide posta a difesa\nDi questo mondo così atterrito\nCosì lontano dal prato fiorito\n\nDa cui per colpa fummo cacciati\nE qui viviamo ancora ingannati\nDa quel maligno che si dispera\n\nPerché ormai vede l&aposumanità intera\nSeguir la mano, che mostra la via\nPer lunico ciel, tu patria mia",
  },
  {
    "title": "Ragazza",
    "testo":
      "Siedi tra foglie e spighe di grano\nVivi di carta di inchiostro e di spago\nE mentre leggi si chiara e silente\nViaggi sperduta nella tua mente\n\nSogni di regni nel fondo di un lago\nPensi a battaglie fatte da un mago\nSenti di guerre lontane e potenti\nE credi che il vero sol ti rallenti\n\nMa mentre vivi seduta e silente\nFa strada pensiero poco prudente\nSe da storie di altri traggo ricchezza\n\nDalla mia cosa farà sentir brezza\nViver così è come ascoltare\nMelodie d&aposaltri, ma or voglio cantare",
  },
  {
    "title": "Chitarra",
    "testo":
      "Tocchi la corda, soffio di rame\nSenti nel legno un tocco fatale\nPerché cantare non serve a niente\nPerché suonare senza la gente\n\nVale di più di tutta una orchestra\nE tu ti specchi in una finestra\nDove quei suoni per te son colori\nDove le note diventan canzoni\n\nDove quel freddo che fuori è di ghiaccio\nResta lì fermo come pagliaccio\nAd ascoltare la melodia\n\nChe viene nitida come grafia\nChe viaggia leggera fino al mio cuore\nMa non vibra forte come il mio amore",
  },
  {
    "title": "Contadino",
    "testo":
      "Torna la sera con carro tremante\nSveglia di ghiaccio mirando levante\nE per la terra, che vuole fiorita\nDi grande sforzo la vita è condita\n\nPer lavorare così duramente\nIl solo nome non serve a niente\nMa vi è bisogno di un grande cuore\nPer una vigna piena d&aposamore\n\nE per preparare il frutto atteso\nGrande fatica, da questo è dipeso\nQuel frutto buono colore rubino\n\nDa cui poi sgorga quell&aposottimo vino\nChe se lo guardi immerso nel tino\nÈ il grande orgoglio del contadino",
  },
];

export default sonetti;
