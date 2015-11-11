'use strict';

/**
 * @ngdoc function
 * @name angular-cv.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angular-cv
 */
angular.module('angular-cv')
  .controller('MainCtrl', function ($scope, $translate) {
    $scope.changeTo = '';
    $scope.educations = [
      {
        title : 'education.M2IAE',
        place:'IAE Toulouse, France',
        time:'2015 - 2016',
        link: 'http://iae-toulouse.fr',
        side: 'left',
        current: true,
        description:'education.DESCM2IAE',
        subjects:['education.STRATMARKET', 'education.DIGITMARKET', 'education.MIT', 'education.TAMMODEL', 'education.ECRM']
        },
      {
        title : 'education.M1IAE',
        place:'IAE Toulouse, France',
        time:'2014 - 2015',
        link: 'http://iae-toulouse.fr',
    	  side: 'right',
        current: false,
        description:'education.DESCM1IAE',
        subjects:['education.gestion', 'education.finance', 'education.anglais', 'education.marketing']
        },
      {
        title : 'education.M1LEA',
        place:'education.PLACEM1LEA',
        link: 'http://www.business-school.ed.ac.uk/',
        time:'2013 - 2014',
        side:'left',
        description : 'education.DESCM1LEA',
        subjects:['education.anglais', 'education.japonais', 'education.ci', 'education.marketing']
      },
      {
        title:'education.JLPT',
        place: 'education.PLACEJLPT',
        link: 'http://www.ed.ac.uk/home',
        description: 'education.DESCJLPT',
        time: 'education.TIMEJLPT',
        side:'right'
      },
    	{
        title : 'education.L3LEA',
        place:'education.PLACEL3LEA',
        link : 'http://univ-tlse2.fr',
        subjects: ['education.anglais', 'education.japonais', 'education.allemand', 'education.aei'],
        time:'2010 - 2013',
        side:'left'
      },
      {
        title : 'education.BAC',
        place:'education.BACPLACE',
        subjects: ['education.BACSERIE', 'education.BACSECEURO', 'education.BACSPEANG'],
        time:'2007 - 2010',
        side:'right'
      }
    ];
    $scope.experiences = {
      awsi:{
        firm:'Maestro Corporation',
        description: '',
        link: 'http://maestro-corporation.com',
        place:'',
        job:'',
        tasks:[],
        current:true,
        time:'',
        side:'left'
        //tooltip:'experience.awsi.TOOLTIP'
      },
      bskoog:{
        firm:'SkoogMusic, Ltd',
        link:'http://skoogmusic.com',
        job: '',
        tasks:[],
        side:'right',
        current:false,
        place: '',
        description: '',
        time:''
      },
      craptrad:{
        firm: 'Raptrad-Imagine',
        link: 'http://raptrad-imagine.com',
        tasks: [],
        side:'left',
        current:false
      },
      dopavillage: {
        firm: 'Ôpa Village',
        link: 'http://opavillage.com',
        tasks:[],
        side:'right',
        current:false,
        place:''
      },
      eopenc: {
        firm: 'Open Classrooms',
        link: 'http://openclassrooms.com',
        tasks:[],
        side:'left',
        current:false,
        place:''
      }
    };

    $scope.langs = {
      afrench:{
        name:'languages.FRENCH.name',
        percent:'100'
      },
      benglish:{
        name:'languages.ENGLISH.name',
        percent:'98'
      },
      cjapanese:{
        name:'languages.JAPANESE.name',
        percent:'80'
      },
      dgerman:{
        name:'languages.GERMAN.name',
        percent:'75'
      },
      espanish:{
        name:'languages.SPANISH.name',
        percent:'55'
      },
      fitalian:{
        name:'languages.ITALIAN.name',
        percent:'55'
      }
    };

    $scope.interests = ["interests.IT", "interests.DEV", "interests.JPN", "interests.LANGS"];

    //Width of the circular progressbars
    $scope.circlewidth = 15;

    var exp = '';
    var task = '';

    //Function to push translation keys into $scope.experiences, so as not to have to do it by hand.
    for (exp in translations.experience){
      $scope.experiences[exp].job = 'experience.' + exp + '.JOB';
      $scope.experiences[exp].place = 'experience.' + exp + '.PLACE';
      // If there actually is a description (it has been defined as an empty string in the controller),
      //push it to the object, otherwise don't, because it would display the translation key.
      if ($scope.experiences[exp].description !== undefined) {$scope.experiences[exp].description = 'experience.' + exp + '.DESCRIPTION';}
      $scope.experiences[exp].time = 'experience.' + exp + '.TIME';
      for(task in translations.experience[exp].TASKS){
        $scope.experiences[exp].tasks.push('experience.' + exp + '.TASKS.' + task);
        //console.log($scope.experiences[exp]);
      }
      //console.log($scope.experiences);
    }

    $scope.changeLanguage = function () {
      if ($translate.use() === 'fr'){
        $translate.use('en');
        //console.log($translate.use());
      }
      else {
        $translate.use('fr');
      }
    };
  });
