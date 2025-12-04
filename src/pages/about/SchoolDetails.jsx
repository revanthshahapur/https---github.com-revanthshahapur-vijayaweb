import * as React from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe, Calendar, Award, Building2, Users } from "lucide-react";
var SchoolDetails = function() {
    var details = [
        {
            title: "Affiliation",
            content: "CBSE (Central Board of Secondary Education)",
            icon: Award
        },
        {
            title: "Affiliation Number",
            content: "831492",
            icon: Award
        },
        {
            title: "Established",
            content: "Committed to excellence in school education",
            icon: Calendar
        },
        {
            title: "Location",
            content: "Honnali Taluk, Davanagere District",
            icon: MapPin
        },
        {
            title: "Grades",
            content: "Kindergarten to High School (Grade 10)",
            icon: Building2
        },
        {
            title: "Student Strength",
            content: "Dedicated to nurturing young minds",
            icon: Users
        }
    ];
    var contactInfo = [
        {
            title: "Phone",
            content: "+91-XXXXXXXXXX",
            icon: Phone
        },
        {
            title: "Email",
            content: "school@sreevijaya.edu",
            icon: Mail
        },
        {
            title: "Website",
            content: "www.sreevijaya.edu",
            icon: Globe
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
    }, "School Details"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Comprehensive information about our school"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-5xl mx-auto"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-2 gap-6 mb-8"
    }, details.map(function(detail, index) {
        var Icon = detail.icon;
        return /*#__PURE__*/ React.createElement(Card, {
            key: index,
            className: "p-6"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-start gap-4"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-6 w-6 text-accent"
        })), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h3", {
            className: "text-xl font-bold text-primary mb-2"
        }, detail.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-muted-foreground"
        }, detail.content))));
    })), /*#__PURE__*/ React.createElement(Card, {
        className: "p-8 mb-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-3xl font-bold text-primary mb-6"
    }, "About the School"), /*#__PURE__*/ React.createElement("div", {
        className: "space-y-4 text-muted-foreground leading-relaxed"
    }, /*#__PURE__*/ React.createElement("p", null, "Sree Vijaya Public School is a leading educational institution affiliated to CBSE (Central Board of Secondary Education), Government of India, New Delhi. Our affiliation number is 831492."), /*#__PURE__*/ React.createElement("p", null, "Located in Honnali Taluk, Davanagere District, our school serves students from Kindergarten to High School (Grade 10), providing quality education that combines academic excellence with holistic development."), /*#__PURE__*/ React.createElement("p", null, "We are committed to nurturing young minds through innovative teaching methods, modern facilities, and a supportive learning environment. Our dedicated faculty focuses on developing critical thinking, creativity, and character in every student, preparing them for future academic and life challenges."), /*#__PURE__*/ React.createElement("p", null, "The school offers a comprehensive curriculum that includes academics, arts, sports, and co-curricular activities, ensuring that each child receives a well-rounded education that helps them discover and develop their unique talents and potential."))), /*#__PURE__*/ React.createElement("div", {
        className: "grid md:grid-cols-3 gap-6"
    }, contactInfo.map(function(info, index) {
        var Icon = info.icon;
        return /*#__PURE__*/ React.createElement(Card, {
            key: index,
            className: "p-6 text-center"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
        }, /*#__PURE__*/ React.createElement(Icon, {
            className: "h-6 w-6 text-accent"
        })), /*#__PURE__*/ React.createElement("h3", {
            className: "text-lg font-semibold text-primary mb-2"
        }, info.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-muted-foreground"
        }, info.content));
    }))))));
};
export default SchoolDetails;
