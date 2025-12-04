import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
var Blog = function() {
    var blogPosts = [
        {
            id: 1,
            title: "The Importance of Holistic Education in Modern Times",
            excerpt: "Discover why holistic education is crucial for developing well-rounded individuals prepared for the challenges of the 21st century.",
            author: "Dr. Sharma",
            date: "November 15, 2025",
            category: "Education"
        },
        {
            id: 2,
            title: "Preparing Students for Competitive Exams",
            excerpt: "Strategies and approaches we use to ensure our students excel in competitive examinations while maintaining their overall development.",
            author: "Prof. Kumar",
            date: "November 10, 2025",
            category: "Academic Excellence"
        },
        {
            id: 3,
            title: "The Role of Sports in Character Building",
            excerpt: "How physical education and sports activities contribute to character development and life skills in students.",
            author: "Coach Reddy",
            date: "November 5, 2025",
            category: "Sports"
        },
        {
            id: 4,
            title: "Parent-Teacher Partnership: Key to Student Success",
            excerpt: "Understanding the importance of collaboration between parents and teachers in ensuring student success.",
            author: "Principal",
            date: "October 28, 2025",
            category: "Community"
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
    }, "Blog"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xl max-w-2xl mx-auto text-primary-foreground/90"
    }, "Insights, news, and stories from our educational community"))), /*#__PURE__*/ React.createElement("section", {
        className: "py-16 bg-background"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-4xl mx-auto space-y-8"
    }, blogPosts.map(function(post) {
        return /*#__PURE__*/ React.createElement(Card, {
            key: post.id,
            className: "p-6 hover:shadow-lg transition-all border-2 hover:border-accent"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "space-y-4"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center gap-4 text-sm text-muted-foreground"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center gap-1"
        }, /*#__PURE__*/ React.createElement(Calendar, {
            className: "h-4 w-4"
        }), /*#__PURE__*/ React.createElement("span", null, post.date)), /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center gap-1"
        }, /*#__PURE__*/ React.createElement(User, {
            className: "h-4 w-4"
        }), /*#__PURE__*/ React.createElement("span", null, post.author)), /*#__PURE__*/ React.createElement("span", {
            className: "px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
        }, post.category)), /*#__PURE__*/ React.createElement("h2", {
            className: "text-2xl font-bold text-primary hover:text-accent transition-colors"
        }, post.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-muted-foreground leading-relaxed"
        }, post.excerpt), /*#__PURE__*/ React.createElement(Button, {
            variant: "outline",
            className: "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
        }, "Read More")));
    })))));
};
export default Blog;
