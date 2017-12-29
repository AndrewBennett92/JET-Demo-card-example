/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'jet-composites/demo-card/loader'],
 function(oj, ko, $) {
  
    function DashboardViewModel() {
      var self = this;
      
      self.employees = [
        {
            name: 'Deb Raphaely',
            avatar: 'http://www.oracle.com/webfolder/technetwork/jet/images/composites/debraphaely.png',
            title: 'Purchasing Director',
            work: 5171278899,
            email: 'deb.raphaely@oracle.com',
            backgroundImage: 'http://www.oracle.com/webfolder/technetwork/jet/images/composites/card-background_1.png'
        },
        {
            name: 'Adam Fripp',
            avatar: null,
            title: 'IT Manager',
            work: 6501232234,
            email: 'adam.fripp@oracle.com',
            backgroundImage: null
        },
        {
            name: 'Andrew Bennett',
            avatar: null,
            title: 'Developer',
            work: 6501232234,
            email: 'andy.bennett@domain.com',
            backgroundImage: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
        }
    ];

    }

    return new DashboardViewModel();
  }
);
