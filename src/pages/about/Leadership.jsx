import * as React from "react";
import { Card } from "@/components/ui/card";
import { User, Award, GraduationCap } from "lucide-react";
import principalImage from "@/assets/principal.jpg";
var Leadership = function() {
    var leadershipTeam = [
        {
            name: "Principal",
            role: "Head of Institution",
            description: "Leading the institution with vision and dedication, ensuring excellence in education and student development.",
            icon: User
        },
        {
            name: "Vice Principal",
            role: "Academic Coordinator",
            description: "Overseeing academic programs and ensuring high standards of teaching and learning.",
            icon: GraduationCap
        },
        {
            name: "Board of Directors",
            role: "Governing Body",
            description: "Providing strategic direction and governance to ensure the institution's continued success.",
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
    }, "Leadership"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Meet our dedicated leadership team"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-5xl mx-auto"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-2 gap-8 items-center mb-16"
    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("img", {
        src: principalImage,
        alt: "Principal",
        className: "rounded-lg shadow-lg w-full h-auto"
    })), /*#__PURE__*/ React.createElement("div", {
        className: "space-y-4"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-3xl font-bold text-primary"
    }, "Message from Our Principal"), /*#__PURE__*/ React.createElement("div", {
        className: "border-l-4 border-accent pl-6 py-2"
    }, /*#__PURE__*/ React.createElement("p", {
        className: "text-lg text-muted-foreground italic leading-relaxed"
    }, '"Education is not just about learning facts — it\'s about developing character and compassion. At Sree Vijaya, we strive to create balanced individuals ready to lead the future with integrity and wisdom. Our commitment is to provide quality education that empowers every student to reach their full potential."')), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground"
    }, "Our leadership team is dedicated to creating an environment where students can excel academically while developing strong moral character and leadership skills.")))))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-secondary"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "text-center mb-12"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-3xl md:text-4xl font-bold text-primary mb-4"
    }, "Our Leadership Team"), /*#__PURE__*/ React.createElement("p", {
        className: "text-lg text-muted-foreground max-w-2xl mx-auto"
    }, "Experienced educators and administrators committed to excellence")), /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
    }, leadershipTeam.map(function(member, index) {
        var Icon = member.icon;
        return /*#__PURE__*/ React.createElement(Card, {
            key: index,
            className: "p-6 text-center hover:shadow-lg transition-all hover:scale-105 border-2 hover:border-accent"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-8 w-8 text-accent"
        })), /*#__PURE__*/ React.createElement("h3", {
            className: "text-xl font-semibold text-primary mb-2"
        }, member.name), /*#__PURE__*/ React.createElement("p", {
            className: "text-accent font-medium mb-3"
        }, member.role), /*#__PURE__*/ React.createElement("p", {
            className: "text-muted-foreground text-sm"
        }, member.description));
    })))));
};
export default Leadership;
