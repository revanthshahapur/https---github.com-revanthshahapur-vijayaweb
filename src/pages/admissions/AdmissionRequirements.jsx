import * as React from "react";
import { Card } from "@/components/ui/card";
import { FileText, CheckCircle } from "lucide-react";
var AdmissionRequirements = function() {
    var requirements = [
        "Completed application form",
        "Birth certificate",
        "Previous academic records",
        "Transfer certificate (if applicable)",
        "Passport size photographs",
        "Medical certificate",
        "Parent/Guardian identification documents"
    ];
    return /*#__PURE__*/ React.createElement("div", {
        className: "min-h-screen"
    }, /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-gradient-navy text-primary-foreground"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4 text-center"
    }, /*#__PURE__*/ React.createElement("h1", {
        className: "text-4xl md:text-5xl font-bold mb-4"
    }, "Admission Requirements"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Documents and prerequisites for admission"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/ React.createElement(Card, {
        className: "p-8 mb-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-3xl font-bold text-primary mb-6"
    }, "Required Documents"), /*#__PURE__*/ React.createElement("div", {
        className: "space-y-3"
    }, requirements.map(function(req, index) {
        return /*#__PURE__*/ React.createElement("div", {
            key: index,
            className: "flex items-start gap-3"
        }, /*#__PURE__*/ React.createElement(CheckCircle, {
            className: "h-5 w-5 text-accent mt-0.5 flex-shrink-0"
        }), /*#__PURE__*/ React.createElement("p", {
            className: "text-muted-foreground"
        }, req));
    }))), /*#__PURE__*/ React.createElement(Card, {
        className: "p-8"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex items-start gap-4"
    }, /*#__PURE__*/ React.createElement(FileText, {
        className: "h-8 w-8 text-accent flex-shrink-0"
    }), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h3", {
        className: "text-2xl font-bold text-primary mb-4"
    }, "Additional Information"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed"
    }, "Please ensure all documents are properly attested and submitted along with the application form. For international students, additional documentation may be required. Contact our admission office for specific requirements based on the grade level."))))))));
};
export default AdmissionRequirements;
