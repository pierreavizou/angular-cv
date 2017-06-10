'use strict';

/**
 * @ngdoc overview
 * @name angular-cv
 * @description
 * # angular-cv
 *
 * Main module of the application.
 */

 var translations = {
'blockinfos': {
  'PDFDL': 'Télécharger au format PDF',
  'CVTITLE': 'Master 2 Marketing @ IAE Toulouse',
  'TOOLTIPGITHUB':'Code du site sur Github',
  'CHANGELANG':'English Version',
  'FLAGURL': 'union-jack.png',
  'BORN': 'Né le 21/09/1992',
  'DRIVE': 'Permis B - Véhicule personnel',
  'TOOLTIPQRCODE': 'Scanner pour sauvegarder mes coordonnées',
  'CVURL': 'http://cloud.avizou.eu/f/5f75040600/?raw=1'
},
'interests':{
'IT': 'Informatique & nouvelles technologies',
'DEV':  'Développement Web',
'JPN': 'Culture et société japonaise',
'LANGS': 'Langues étrangères'
},
'languages':{
  'FRENCH':{
    'name':'Français (Langue maternelle)',
  },
  'ENGLISH':{
    'name':'Anglais (Niveau C2 - Certificat Cambridge)',
  },
  'JAPANESE':{
    'name':'Japonais (Niveau B2 - JLPT N3)',
  },
  'GERMAN':{
    'name':'Allemand (Niveau B1 - B2)',
  },
  'SPANISH':{
    'name':'Espagnol (Niveau B1)',
  },
  'ITALIAN':{
    'name':'Italien (Niveau B1)',
  }
},
'sections': {
  'EDUCATION':'Formation',
  'EXPERIENCE': 'Expérience',
  'SKILLS':'Compétences',
  'LANGUAGES':'Langues',
  'INTERESTS':'Centres d\'intérêts'
},
'education': {
  'M2IAE': 'Master 2 Marketing of Innovative Technologies',
  'STRATMARKET': 'Stratégie Marketing',
  'DIGITMARKET': 'Marketing Digital - Webmarketing',
  'TAMMODEL': 'Modélisation statistique d\'acceptation de l\'innovation',
  'MIT': 'Marketing des Technologies Innovantes',
  'ECRM': 'e-CRM et gestion de la e-reputation',
  'DESCM2IAE': 'Cette spécialité de Master 2 est enseignée en anglais. Outre l\'enseigment des compétences générales du marketing, elle traite des spécificités du Marketing des Technologies Innovantes',
  'M1IAE': 'Master 1 Marketing',
  'DESCM1IAE': 'Le Master Marketing est un diplôme dont l\'objectif est de former des professionnels du marketing et des chercheurs dans la discipline. Il prépare les étudiants aux métiers du marketing dans les entreprises, les agences et les cabinets de conseil',
  'gestion' : 'Gestion',
  'finance':'Finance',
  'anglais': 'Anglais',
  'marketing': 'Marketing',
  'japonais': 'Japonais',
  'allemand': 'Allemand',
  'aei': 'Spécialité Affaires Économiques Internationales',
  'ci':'Commerce International',
  'M1LEA': 'Master 1 LEA Commerce International / Marketing',
  'DESCM1LEA':'Année d\'échange Erasmus dans le cadre du Master 1 LEA.',
  'PLACEM1LEA': 'The University of Edinburgh Business School',
  'JLPT': 'Japanese Language Proficency Test N3',
  'DESCJLPT':'Certificat international d\'aptitude en langue japonaise, reconnu par le gouvernement japonais et permettant de travailler dans les entreprises et collectivités locales au Japon.',
  'PLACEJLPT': 'The University of Edinburgh, Royaume-Uni',
  'TIMEJLPT':'Décembre 2013',
  'L3LEA': 'Licence LEA Affaires Économiques Internationales, Mention Bien',
  'PLACEL3LEA': 'Université Toulouse-II, France',
  'BAC': 'Baccalauréat Général',
  'BACPLACE':'Lycée Bellevue, Albi (Tarn)',
  'BACSERIE':'Série Économique et sociale',
  'BACSPEANG':'Spécialité Anglais',
  'BACSECEURO':'Section Européenne'
},
'villes':{
  'TOULOUSE':'Toulouse',
  'PARIS': 'Paris'
},
'experience': { // here we prefix job titles with a, b, c etc because when using ng-repeat Angular sorts objects alphabetically, regardless of their index.
  'amaestro': {
    'JOB':'Full Stack Marketer',
    'DESCRIPTION': 'C.D.I. temps plein',
    'PLACE':'Toulouse, Paris',
    'TIME': 'Septembre 2016 - Présent',
    'TASKS':{
      't1': 'Participation à l\'encadrement de l\'équipe marketing ',
      't2':'Définition de stratégies marketing au service des objectifs de l’entreprise',
      't3':'Pilotage et suivi des performances (Acquisition, MSCV...)',
      't4':'Développement d’outils de reporting et de correction des performances',
      't5': 'Amélioration de l\'UX et du taux de conversion',
      't6': 'Participation au recrutement',
      't7': 'Mise en place d’outils adaptés aux enjeux (automation, scale)',
      't8': 'Rédaction de spécification techniques pour les développeurs',
      // 't9': 'Amélioration de l\'expérience utilisateur et du taux de conversion',
      // 't10': 'Gestion de la relation client',
      // 't11': 'Gestion de projet de migration de plateforme e-commerce (SaaS vers auto-hébergé)'
    },
    'TOOLTIP':'Plus d\'informations sur demande'
  },
  'awsi': {
    'JOB':'Chef de projet Webmarketing',
    'DESCRIPTION': 'Stages et temps partiel pendant Master Marketing',
    'PLACE':'Toulouse, Paris',
    'TIME': 'Juin 2014 - Août 2016',
    'TASKS':{
      // 't1': 'Participation à la définition de la stratégie',
      't2':'Mise en œuvre et gestion technique du site Internet',
      't3':'Gestion des campagnes de publicité en ligne (Adwords, Facebook, Twitter)',
      't4':'Optimisation du coût des campagnes',
      't5': 'Optimisation du référencement naturel (aspects techniques)',
      // 't6': 'Participation au recrutement',
      't7': 'Mise en place d\'outils de suivi avancés (Analytics, Facebook, Hotjar...)',
      // 't8': 'Analyse de données',
      // 't9': 'Amélioration de l\'expérience utilisateur et du taux de conversion',
      't10': 'Gestion de la relation client',
      // 't11': 'Gestion de projet de migration de plateforme e-commerce (SaaS vers auto-hébergé)'
    },
    'TOOLTIP':'Plus d\'informations sur demande'
  },
  'bskoog':{
    'JOB':'Mise en place d\'un Marketing Mix',
    'PLACE': 'Édimbourg, Royaume-Uni',
    'DESCRIPTION': 'En tant que projet tutoré en marketing, travail en équipe sur :',
    'TIME': 'Janvier - Mars 2014',
    'TASKS':{
      't1': 'Analyse du marché existant',
      't2': 'Identification de nouveaux marchés',
      't3':'Définition d’une stratégie marketing et communication',
      't4':'Propositions d’optimisations SEO – Campagnes SEA.'
    }
  },
  'craptrad':{
    'JOB': 'Stage de fin de Licence',
    'PLACE': 'Toulouse, France',
    'TIME': 'Mai - Septembre 2013',
    'TASKS':{
      't1': 'Gestion de projets',
      't2': 'Contrôles qualité',
      't3': 'Relations fournisseurs',
      't4': 'Négociation tarifs et délais'
    }
  },
  'dopavillage':{
    'JOB': 'Emploi d\'été à l\'étranger',
    'PLACE': 'Tateyama (館山), Japon',
    'TIME': 'Juillet - Août 2012',
    'TASKS':{
      't1': 'Accueil des clients Japonais',
      't2': 'Service au restaurant',
      't3': 'Gestion des plaintes',
      't4': 'Check-ins - Check-outs'
    }
  },
  'eopenc':{
    'JOB': 'Activité bénévole',
    'PLACE': 'France',
    'TIME': '2007 - 2013',
    'TASKS':{
      't1': 'Modération des forums et validation du contenu pédagogique pour le site OpenClassrooms'
    }
  }
},
'footer':{
    'BACKTOTOP': 'Haut de page'
  }
};

angular
  .module('angular-cv', [
    //'ngAnimate',
    //'ngCookies',
    //'ngResource',
    'ngRoute',
    'angular-timeline',
    'pascalprecht.translate',
    'ui.bootstrap',
  ])
  .config(['$translateProvider', function ($translateProvider) {
// add translation table
$translateProvider
.translations('fr', translations).useStaticFilesLoader({
  prefix:'lang/',
  suffix: '.json'
}).determinePreferredLanguage().fallbackLanguage('en'); //try to determine user language and fallback to English if it is impossible
}]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/cv.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
