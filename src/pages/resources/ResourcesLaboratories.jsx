import * as React from "react";
import { Card } from "@/components/ui/card";
import { FlaskConical, Microscope, Computer } from "lucide-react";
var ResourcesLaboratories = function() {
    var labs = [
        {
            title: "Physics Laboratory",
            description: "Equipped with modern instruments for experiments and practical learning",
            icon: FlaskConical
        },
        {
            title: "Chemistry Laboratory",
            description: "State-of-the-art facilities for chemical experiments and analysis",
            icon: FlaskConical
        },
        {
            title: "Biology Laboratory",
            description: "Well-equipped lab with microscopes and specimens for biological studies",
            icon: Microscope
        },
        {
            title: "Computer Laboratory",
            description: "Modern computer labs with latest technology and software",
            icon: Computer
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
    }, "Laboratories"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "State-of-the-art laboratory facilities"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-5xl mx-auto"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-2 gap-6 mb-8"
    }, labs.map(function(lab, index) {
        var Icon = lab.icon;
        return /*#__PURE__*/ React.createElement(Card, {
            key: index,
            className: "p-6"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-start gap-4"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-6 w-6 text-accent"
        })), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h3", {
            className: "text-xl font-bold text-primary mb-2"
        }, lab.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-muted-foreground"
        }, lab.description))));
    })), /*#__PURE__*/ React.createElement(Card, {
        className: "p-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-2xl font-bold text-primary mb-4"
    }, "Laboratory Facilities"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed"
    }, "Our laboratories are equipped with modern instruments and equipment to facilitate hands-on learning and practical experimentation. Students have access to well-maintained facilities that support their academic and research activities."))))));
};
export default ResourcesLaboratories;
