import * as React from "react";
import { Card } from "@/components/ui/card";
import { Users, FileText, Phone } from "lucide-react";
var ResourcesParent = function() {
    var resources = [
        {
            title: "Parent Portal",
            description: "Access to student progress, attendance, and academic information",
            icon: Users
        },
        {
            title: "Parent-Teacher Meetings",
            description: "Regular meetings to discuss student progress and development",
            icon: FileText
        },
        {
            title: "Communication Channels",
            description: "Multiple channels for parents to communicate with school administration",
            icon: Phone
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
    }, "Parent Resources"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Resources and support for parents"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-3 gap-6 mb-8"
    }, resources.map(function(resource, index) {
        var Icon = resource.icon;
        return /*#__PURE__*/ React.createElement(Card, {
            key: index,
            className: "p-6 text-center"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-6 w-6 text-accent"
        })), /*#__PURE__*/ React.createElement("h3", {
            className: "text-xl font-semibold text-primary mb-3"
        }, resource.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-muted-foreground text-sm"
        }, resource.description));
    })), /*#__PURE__*/ React.createElement(Card, {
        className: "p-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-2xl font-bold text-primary mb-4"
    }, "Parent Engagement"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed"
    }, "We believe in strong partnership between school and parents. We provide various resources and communication channels to keep parents informed about their child's progress and school activities. Regular parent-teacher meetings and open communication ensure collaborative support for student success."))))));
};
export default ResourcesParent;
