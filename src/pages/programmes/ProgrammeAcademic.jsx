import * as React from "react";
import { Card } from "@/components/ui/card";
import { BookOpen, GraduationCap, School } from "lucide-react";
var ProgrammeAcademic = function() {
    var programmes = [
        {
            title: "Primary School",
            description: "Comprehensive primary education focusing on foundational skills, literacy, numeracy, and character building. CBSE curriculum with interactive learning approach.",
            icon: School
        },
        {
            title: "High School",
            description: "Secondary education emphasizing academic excellence, critical thinking, and holistic development. CBSE curriculum preparing students for higher studies.",
            icon: BookOpen
        },
        {
            title: "PU College (Science & Commerce)",
            description: "Pre-university education preparing students for higher education and professional success. Specialized streams in Science and Commerce with expert guidance.",
            icon: GraduationCap
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
    }, "Academic Programmes"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Comprehensive educational programs for all levels"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-6xl mx-auto"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-3 gap-8 mb-12"
    }, programmes.map(function(program, index) {
        var Icon = program.icon;
        return /*#__PURE__*/ React.createElement(Card, {
            key: index,
            className: "p-6 hover:shadow-lg transition-all hover:scale-105"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-8 w-8 text-accent"
        })), /*#__PURE__*/ React.createElement("h3", {
            className: "text-xl font-semibold text-primary mb-3"
        }, program.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-muted-foreground"
        }, program.description));
    })), /*#__PURE__*/ React.createElement(Card, {
        className: "p-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-2xl font-bold text-primary mb-4"
    }, "Curriculum"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground leading-relaxed"
    }, "Our academic programmes follow the CBSE curriculum, ensuring students receive a nationally recognized education. We focus on developing critical thinking, problem-solving skills, and a deep understanding of subjects while maintaining high academic standards."))))));
};
export default ProgrammeAcademic;
