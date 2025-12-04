import * as React from "react";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-banner1.jpg";
import studentsImage from "@/assets/students-learning.jpg";
import priceDistributionImage from "@/assets/price distrbution.jpg";
import Activity from "@/assets/activity.jpg";
var Gallery = function() {
    var galleryItems = [
        {
            id: 1,
            image: heroImage,
            title: "School Campus",
            category: "Campus"
        },
        {
            id: 2,
            image: studentsImage,
            title: "Students Learning",
            category: "Academics"
        },
        {
            id: 3,
            image: priceDistributionImage,
            title: "Our Leadership",
            category: "Staff"
        },
        {
            id: 4,
            image: heroImage,
            title: "Sports Day",
            category: "Events"
        },
        {
            id: 5,
            image: studentsImage,
            title: "Science Lab",
            category: "Facilities"
        },
        {
            id: 6,
            image: Activity,
            title: "Annual Day",
            category: "Events"
        },
        {
            id: 7,
            image: heroImage,
            title: "Library",
            category: "Facilities"
        },
        {
            id: 8,
            image: studentsImage,
            title: "Art Class",
            category: "Activities"
        }
    ];
    return /*#__PURE__*/ React.createElement("div", {
        className: "min-h-screen"
    }, /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-gradient-navy text-primary-foreground"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4 text-center"
    }, /*#__PURE__*/ React.createElement("h1", {
        className: "text-4xl md:text-5xl font-bold mb-4"
    }, "Gallery"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Explore our campus, events, and student activities"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    }, galleryItems.map(function(item) {
        return /*#__PURE__*/ React.createElement(Card, {
            key: item.id,
            className: "overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "relative overflow-hidden aspect-square"
        }, /*#__PURE__*/ React.createElement("img", {
            src: item.image,
            alt: item.title,
            className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        }), /*#__PURE__*/ React.createElement("div", {
            className: "absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "p-4 text-primary-foreground"
        }, /*#__PURE__*/ React.createElement("h3", {
            className: "font-semibold text-lg"
        }, item.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-sm text-accent"
        }, item.category)))));
    })))));
};
export default Gallery;
