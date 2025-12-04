import * as React from "react";
import { Card } from "@/components/ui/card";
import { Palette, Trophy, Users, Lightbulb } from "lucide-react";
var ProgrammeCoScholastic = function() {
    var programmes = [
        {
            title: "Arts",
            icon: Palette,
            description: "Creative expression through various art forms and mediums"
        },
        {
            title: "Physical Education",
            icon: Trophy,
            description: "Sports, fitness, and physical development activities"
        },
        {
            title: "Life Skills",
            icon: Users,
            description: "Essential life skills and personal development programs"
        },
        {
            title: "Clubs & Activities",
            icon: Lightbulb,
            description: "Various clubs and interest-based activities"
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
    }, "Co-Scholastic Programs"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Developing well-rounded individuals through diverse activities"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-6xl mx-auto"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
    }, programmes.map(function(item, index) {
        var Icon = item.icon;
        return /*#__PURE__*/ React.createElement(Card, {
            key: index,
            className: "p-6 text-center hover:shadow-md transition-all"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-6 w-6 text-accent"
        })), /*#__PURE__*/ React.createElement("h4", {
            className: "font-semibold text-primary mb-2"
        }, item.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-sm text-muted-foreground"
        }, item.description));
    })), /*#__PURE__*/ React.createElement(Card, {
        className: "p-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-2xl font-bold text-primary mb-4"
    }, "Co-Scholastic Excellence"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed"
    }, "Our co-scholastic programs complement academic learning by providing opportunities for creative expression, physical development, and skill-building. These programs help students discover their talents, develop new interests, and build confidence beyond the classroom."))))));
};
export default ProgrammeCoScholastic;
