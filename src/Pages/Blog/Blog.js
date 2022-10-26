import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="question-answer-container pt-5 mx-30">
      <h1 className="text-2xl text-center font-medium">
        Here is some Questions and Answer for you.
      </h1>
      <div className="question-container">
        <div className="question-answer">
          <h3 className="text-2xl font-medium mb-3">
            Question-1: What is cors?
          </h3>
          <p>
            CORS is a mechanism that allows restricted resources on a web page
            to be requested from another domain outside the domain from which
            the first resource was served," This precursor to CORS was called
            the "Same-Origin" policy. In short, it dictates that when your
            browser loads a script (like a button handler, or some async widget)
            from a particular (sub)domain that the script can only make requests
            to the (sub)domain that it originated from.
          </p>
        </div>
        <div className="question-answer">
          <h3 className="text-2xl font-medium mb-3">
            Question-2: Why are you using firebase? What other options do you
            have to implement authentication?
          </h3>
          <p>
            The Firebase Realtime Database lets me build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            real-time events continue to fire, giving the end user a responsive
            experience. <br></br>Firebase Authentication provides backend
            services, easy-to-use SDKs, and ready-made UI libraries to
            authenticate users to your app. It supports authentication using
            passwords, phone numbers, popular federated identity providers like
            Google, Facebook, and Twitter, and more. <br></br> There are so many
            options to implement authentication. like, MongoDB, Oracle Database,
            Amazon Redshift, Data Hub, Redis Enterprise Cloud etc.
          </p>
        </div>
        <div className="question-answer">
          <h3 className="text-2xl font-medium mb-3">
            Question-3: How does the private route work?
          </h3>
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </div>
        <div className="question-answer">
          <h3 className="text-2xl font-medium mb-3">
            Question-4: What is Node? How does Node work?{" "}
          </h3>
          <p>
            Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment that runs on a JavaScript Engine (i.e. V8
            engine) and executes JavaScript code outside a web browser, which
            was designed to build scalable network applications. Node.js lets
            developers use JavaScript to write command line tools and for
            server-side scripting—running scripts server-side to produce dynamic
            web page content before the page is sent to the user's web browser.
            Consequently, Node.js represents a "JavaScript everywhere"
            paradigm, unifying web-application development around a single
            programming language, rather than different languages for
            server-side and client-side scripts.
            <br />
            Node.js has an event-driven architecture capable of asynchronous
            I/O. These design choices aim to optimize throughput and scalability
            in web applications with many input/output operations, as well as
            for real-time Web applications (e.g., real-time communication
            programs and browser games). The Node.js distributed development
            project was previously governed by the Node.js Foundation, and has
            now merged with the JS Foundation to form the OpenJS Foundation,
            which is facilitated by the Linux Foundation's Collaborative
            Projects program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
