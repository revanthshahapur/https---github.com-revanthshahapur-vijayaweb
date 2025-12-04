import * as React from "react";
import { Card } from "@/components/ui/card";
import { Building2, FlaskConical, Dumbbell, Computer, Library, Microscope } from "lucide-react";
var Facilities = function() {
    var facilities = [
        {
            title: "Modern Classrooms",
            description: "Well-equipped, spacious classrooms with modern teaching aids and comfortable learning environment.",
            icon: Building2
        },
        {
            title: "Library",
            description: "Extensive collection of books, journals, and digital resources to support learning and research.",
            icon: Library
        },
        {
            title: "Science Laboratories",
            description: "State-of-the-art laboratories for Physics, Chemistry, and Biology with modern equipment.",
            icon: FlaskConical
        },
        {
            title: "Computer Labs",
            description: "Fully equipped computer laboratories with latest technology and software for IT education.",
            icon: Computer
        },
        {
            title: "Sports Facilities",
            description: "Comprehensive sports infrastructure including playgrounds, courts, and equipment for various sports.",
            icon: Dumbbell
        },
        {
            title: "Laboratory Equipment",
            description: "Advanced laboratory equipment and instruments to facilitate hands-on learning experiences.",
            icon: Microscope
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
    }, "Facilities"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "World-class infrastructure for excellence in education"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "text-center mb-12"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-3xl md:text-4xl font-bold text-primary mb-4"
    }, "Our Facilities"), /*#__PURE__*/ React.createElement("p", {
        className: "text-lg text-muted-foreground max-w-2xl mx-auto"
    }, "We provide state-of-the-art facilities to support comprehensive learning and development")), /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    }, facilities.map(function(facility, index) {
        var Icon = facility.icon;
        return /*#__PURE__*/ React.createElement(Card, {
            key: index,
            className: "p-6 hover:shadow-lg transition-all hover:scale-105 border-2 hover:border-accent"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-8 w-8 text-accent"
        })), /*#__PURE__*/ React.createElement("h3", {
            className: "text-xl font-semibold text-primary mb-3"
        }, facility.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-muted-foreground"
        }, facility.description));
    })))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-secondary"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/ React.createElement(Card, {
        className: "p-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-2xl font-bold text-primary mb-4"
    }, "Infrastructure Excellence"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed mb-4"
    }, "Our institution boasts modern infrastructure designed to support holistic education. From well-equipped classrooms to advanced laboratories, we ensure that students have access to the best facilities for their academic and personal growth."), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed"
    }, "We continuously invest in upgrading our facilities to keep pace with evolving educational needs and technological advancements, ensuring our students always have access to the latest resources and learning environments."))))));
};
export default Facilities;
