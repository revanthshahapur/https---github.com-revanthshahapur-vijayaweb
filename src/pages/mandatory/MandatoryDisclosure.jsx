import * as React from "react";
import { Card } from "@/components/ui/card";
import { FileText, Building2, Users, Award } from "lucide-react";
var MandatoryDisclosure = function() {
    var disclosures = [
        {
            title: "General Information",
            items: [
                "Name of the School: Sree Vijaya PU College & Public School",
                "Affiliation Number: 831492",
                "School Code: As per CBSE",
                "Complete Address: Honnali Taluk, Davanagere District"
            ],
            icon: Building2
        },
        {
            title: "Management Information",
            items: [
                "Name of Trust/Society: Sree Vijaya Educational Trust",
                "Year of Establishment: As per records",
                "Registration Details: Registered under applicable laws"
            ],
            icon: Users
        },
        {
            title: "Academic Information",
            items: [
                "CBSE Affiliation: Yes",
                "Classes: From Kindergarten to PU College",
                "Streams Offered: Science and Commerce",
                "Academic Year: As per CBSE calendar"
            ],
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
    }, "Mandatory Public Disclosure"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Transparency and accountability in education"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-5xl mx-auto"
    }, /*#__PURE__*/ React.createElement(Card, {
        className: "p-8 mb-8"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex items-start gap-4 mb-6"
    }, /*#__PURE__*/ React.createElement(FileText, {
        className: "h-8 w-8 text-accent flex-shrink-0"
    }), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h2", {
        className: "text-3xl font-bold text-primary mb-4"
    }, "Public Disclosure"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed"
    }, "As per CBSE guidelines, we provide comprehensive information about our institution, management, academic programs, facilities, and other relevant details for the benefit of parents, students, and stakeholders.")))), /*#__PURE__*/ React.createElement("div", {
        className: "space-y-6"
    }, disclosures.map(function(disclosure, index) {
        var Icon = disclosure.icon;
        return /*#__PURE__*/ React.createElement(Card, {
            key: index,
            className: "p-6"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-start gap-4"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-6 w-6 text-accent"
        })), /*#__PURE__*/ React.createElement("div", {
            className: "flex-1"
        }, /*#__PURE__*/ React.createElement("h3", {
            className: "text-xl font-bold text-primary mb-4"
        }, disclosure.title), /*#__PURE__*/ React.createElement("ul", {
            className: "space-y-2"
        }, disclosure.items.map(function(item, itemIndex) {
            return /*#__PURE__*/ React.createElement("li", {
                key: itemIndex,
                className: "text-muted-foreground flex items-start"
            }, /*#__PURE__*/ React.createElement("span", {
                className: "mr-2"
            }, "•"), /*#__PURE__*/ React.createElement("span", null, item));
        })))));
    })), /*#__PURE__*/ React.createElement(Card, {
        className: "p-8 mt-8"
    }, /*#__PURE__*/ React.createElement("h3", {
        className: "text-2xl font-bold text-primary mb-4"
    }, "Additional Information"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed"
    }, "For detailed information about fees, facilities, staff qualifications, and other aspects of our institution, please contact our administrative office. We are committed to maintaining transparency and providing all necessary information to stakeholders."))))));
};
export default MandatoryDisclosure;
