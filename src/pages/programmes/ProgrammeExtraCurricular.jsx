import * as React from "react";
import { Card } from "@/components/ui/card";
import { Music, Camera, Gamepad2, Drama } from "lucide-react";
var ProgrammeExtraCurricular = function() {
    var activities = [
        {
            title: "Music",
            icon: Music,
            description: "Vocal and instrumental music programs"
        },
        {
            title: "Drama",
            icon: Drama,
            description: "Theatre and performing arts activities"
        },
        {
            title: "Photography",
            icon: Camera,
            description: "Photography club and workshops"
        },
        {
            title: "Gaming",
            icon: Gamepad2,
            description: "Educational gaming and competitions"
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
    }, "Extra Curricular Activities"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Explore interests and develop talents beyond academics"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-6xl mx-auto"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
    }, activities.map(function(activity, index) {
        var Icon = activity.icon;
        return /*#__PURE__*/ React.createElement(Card, {
            key: index,
            className: "p-6 text-center hover:shadow-md transition-all"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-6 w-6 text-accent"
        })), /*#__PURE__*/ React.createElement("h4", {
            className: "font-semibold text-primary mb-2"
        }, activity.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-sm text-muted-foreground"
        }, activity.description));
    })), /*#__PURE__*/ React.createElement(Card, {
        className: "p-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-2xl font-bold text-primary mb-4"
    }, "Beyond the Classroom"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed"
    }, "Our extra-curricular activities provide students with opportunities to explore their interests, develop new skills, and showcase their talents. These activities foster creativity, teamwork, and personal growth while providing a well-rounded educational experience."))))));
};
export default ProgrammeExtraCurricular;
