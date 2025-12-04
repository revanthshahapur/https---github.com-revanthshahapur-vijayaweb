import * as React from "react";
import { Card } from "@/components/ui/card";
import { Clock, BookOpen, Users, Utensils, GraduationCap, Music, Palette } from "lucide-react";
var AverageSchoolDay = function() {
    var schedule = [
        {
            time: "8:00 AM - 8:30 AM",
            activity: "Morning Assembly & Prayer",
            icon: Users
        },
        {
            time: "8:30 AM - 9:15 AM",
            activity: "First Period - Mathematics",
            icon: BookOpen
        },
        {
            time: "9:15 AM - 10:00 AM",
            activity: "Second Period - Science",
            icon: BookOpen
        },
        {
            time: "10:00 AM - 10:15 AM",
            activity: "Short Break",
            icon: Clock
        },
        {
            time: "10:15 AM - 11:00 AM",
            activity: "Third Period - Languages",
            icon: BookOpen
        },
        {
            time: "11:00 AM - 11:45 AM",
            activity: "Fourth Period - Social Studies",
            icon: BookOpen
        },
        {
            time: "11:45 AM - 12:30 PM",
            activity: "Lunch Break",
            icon: Utensils
        },
        {
            time: "12:30 PM - 1:15 PM",
            activity: "Fifth Period - Computer Science",
            icon: BookOpen
        },
        {
            time: "1:15 PM - 2:00 PM",
            activity: "Sixth Period - Arts & Crafts",
            icon: Palette
        },
        {
            time: "2:00 PM - 2:15 PM",
            activity: "Short Break",
            icon: Clock
        },
        {
            time: "2:15 PM - 3:00 PM",
            activity: "Seventh Period - Physical Education / Music",
            icon: Music
        },
        {
            time: "3:00 PM - 4:00 PM",
            activity: "Extra-Curricular Activities & Clubs",
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
    }, "Average School Day"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "A typical day at Sree Vijaya Public School"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/ React.createElement(Card, {
        className: "p-8 mb-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-3xl font-bold text-primary mb-6"
    }, "Daily Schedule"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground mb-8 leading-relaxed"
    }, "Our school day is thoughtfully structured to provide a balanced mix of academic learning, creative expression, physical activity, and personal development. Each day is designed to maximize learning while ensuring students have time for recreation, exploration, and growth."), /*#__PURE__*/ React.createElement("div", {
        className: "space-y-4"
    }, schedule.map(function(item, index) {
        var Icon = item.icon;
        return /*#__PURE__*/ React.createElement("div", {
            key: index,
            className: "flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-5 w-5 text-accent"
        })), /*#__PURE__*/ React.createElement("div", {
            className: "flex-1"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "font-semibold text-primary mb-1"
        }, item.time), /*#__PURE__*/ React.createElement("div", {
            className: "text-muted-foreground"
        }, item.activity)));
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-2 gap-6"
    }, /*#__PURE__*/ React.createElement(Card, {
        className: "p-6"
    }, /*#__PURE__*/ React.createElement("h3", {
        className: "text-2xl font-bold text-primary mb-4"
    }, "Academic Excellence"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground"
    }, "Our daily schedule includes dedicated periods for all core subjects, ensuring comprehensive coverage of the CBSE curriculum while allowing time for interactive learning, projects, and revision sessions.")), /*#__PURE__*/ React.createElement(Card, {
        className: "p-6"
    }, /*#__PURE__*/ React.createElement("h3", {
        className: "text-2xl font-bold text-primary mb-4"
    }, "Holistic Development"), /*#__PURE__*/ React.createElement("p", {
        className: "text-muted-foreground"
    }, "Beyond academics, we allocate time for arts, music, physical education, and various clubs and activities to ensure well-rounded development of every student and help them discover their talents and interests.")))))));
};
export default AverageSchoolDay;
