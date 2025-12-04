import * as React from "react";
import { Card } from "@/components/ui/card";
import { Library, BookOpen, BookMarked } from "lucide-react";
var ResourcesLibrary = function() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "min-h-screen"
    }, /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-gradient-navy text-primary-foreground"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4 text-center"
    }, /*#__PURE__*/ React.createElement("h1", {
        className: "text-4xl md:text-5xl font-bold mb-4"
    }, "Library"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Extensive collection of books and resources"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/ React.createElement(Card, {
        className: "p-8 mb-8"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex items-start gap-4 mb-6"
    }, /*#__PURE__*/ React.createElement(Library, {
        className: "h-8 w-8 text-accent flex-shrink-0"
    }), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h2", {
        className: "text-3xl font-bold text-primary mb-4"
    }, "Library Resources"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed"
    }, "Our library houses an extensive collection of books, journals, reference materials, and digital resources to support learning and research. Students have access to a wide range of academic and recreational reading materials."))), /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-2 gap-6"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "p-4 border border-border rounded-lg"
    }, /*#__PURE__*/ React.createElement(BookOpen, {
        className: "h-6 w-6 text-accent mb-2"
    }), /*#__PURE__*/ React.createElement("h3", {
        className: "font-semibold text-primary mb-2"
    }, "Academic Books"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground text-sm"
    }, "Comprehensive collection of textbooks and reference materials for all subjects")), /*#__PURE__*/ React.createElement("div", {
        className: "p-4 border border-border rounded-lg"
    }, /*#__PURE__*/ React.createElement(BookMarked, {
        className: "h-6 w-6 text-accent mb-2"
    }), /*#__PURE__*/ React.createElement("h3", {
        className: "font-semibold text-primary mb-2"
    }, "Digital Resources"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground text-sm"
    }, "Access to online databases, e-books, and digital learning resources"))))))));
};
export default ResourcesLibrary;
