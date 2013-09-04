/*
 Description: Renders the assets.jag view
 Filename:assets.js
 Created Date: 29/7/2013
 */
var breadcrumbData = { breadcrumb :
    [
        {
            assetType : "Gadget",
            url : "/publisher/assets/gadget/",
            assetIcon : "icon-dashboard" //font-awesome icon class
        },
        {
            assetType : "EBook",
            url : "/publisher/assets/ebook/",
            assetIcon : "icon-book" //font-awesome icon class
        },
        {
            assetType : "Site",
            url : "/publisher/assets/site/",
            assetIcon : "icon-compass" //font-awesome icon class
        }
    ]
};
var leftNavItems = { leftNavLinks :
    [
        {
            name : "Browse All",
            additionalClasses : "prominent-link",
            url : "/publisher/assets/gadget/"
        },
        {
            name : "Add ebook",
            iconClass : "icon-plus-sign-alt",
            url : "/publisher/asset/ebook"
        },
        {
            name : "Statistics",
            iconClass : "icon-dashboard",
            url : "#"
        }
    ]
};
var render = function (theme, data, meta, require) {
    theme('single-col-fluid', {
        title: data.title,
        header: [
            {
                partial: 'header',
                context: data
            }
        ],
        ribbon: [
            {
                partial: 'ribbon',
                context: breadcrumbData
            }
        ],
        leftnav: [
            {
                partial: 'left-nav',
                context: leftNavItems
            }
        ],
        listassets: [
            {
                partial: 'list-assets',
                context: data
            }
        ]
    });
};