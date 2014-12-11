(function(){
var app = angular.module('store', [ ]);

    app.controller('StoreController', function(){
    this.products = gems;
    
    });
    app.controller('TabController', function(){
  this.tab = 1;
  this.setTab = function(selectedTab){
    this.tab = selectedTab;
  };
   this.isSelected = function(tabx){
   return this.tab === tabx; 
   };
   
});

       
var gems = [ 
    {
 name: 'Dodecaedro', 
 price: 2.29,
     description: '...',
    canPurchase: true,
    soldOut: false,
              images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif"
      ],
    },
    {
     name:"Pentagono",
    price:5.95,
        description:"...otro",
        canPurchase: false,
        soldOut: false,
              images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif"
      ],
        
    }
];
app.controller('PanelController', function(){
    this.tab = 1;
           
this.selectTab = function(setTab){ this.tab = setTab;
    };
    this.isSelected 
    = function(checkTab){
       return this.tab === checkTab;
       }
    });

})();

