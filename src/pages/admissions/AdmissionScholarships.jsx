import * as React from "react";
import { Card } from "@/components/ui/card";
import { Award, Star } from "lucide-react";
var AdmissionScholarships = function() {
    var scholarships = [
        {
            title: "Merit Scholarship",
            description: "Awarded to students with outstanding academic performance",
            icon: Star
        },
        {
            title: "Need-Based Scholarship",
            description: "Financial assistance for deserving students based on family income",
            icon: Award
        },
        {
            title: "Sports Scholarship",
            description: "Recognition and support for talented athletes",
            icon: Award
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
    }, "Scholarships"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Financial support for deserving students"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-3 gap-6 mb-8"
    }, scholarships.map(function(scholarship, index) {
        var Icon = scholarship.icon;
        return /*#__PURE__*/ React.createElement(Card, {
            key: index,
            className: "p-6 text-center"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-6 w-6 text-accent"
        })), /*#__PURE__*/ React.createElement("h3", {
            className: "text-xl font-semibold text-primary mb-3"
        }, scholarship.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-muted-foreground text-sm"
        }, scholarship.description));
    })), /*#__PURE__*/ React.createElement(Card, {
        className: "p-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-2xl font-bold text-primary mb-4"
    }, "Scholarship Programs"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed mb-4"
    }, "We believe that financial constraints should not hinder quality education. Our scholarship programs are designed to support deserving students and recognize excellence in academics, sports, and other areas."), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed"
    }, "For more information about eligibility criteria and application procedures, please contact our admission office. We are committed to making quality education accessible to all."))))));
};
export default AdmissionScholarships;
