import React from "react";
import styles from "./Blog.module.scss";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className={`${styles.bg} container-fluid`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className={styles.blogTitle}>Read Our Latest Blog</h2>
          </div>
          <div className="col-md-6 mb-3">
            <BlogCard
              imageUrl="/images/blog1.jpg"
              date="February 14,2024"
              title="Depression Symptoms in Children"
              content="Welcome to our Mood-E Blog Written by, Barbara Wormington Barbara is
          currently working under Kaycee Bragg to obtain her professional
          licensure in the state of Minnesota.…"
              buttonText="Anxiety"
              height="530px"
            />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-6">
                <BlogCard
                  imageUrl="/images/blog2.jpg"
                  date="February 14,2024"
                  title2="Parenting and Mental Health: Balancing the Demands"
                  buttonText="Anxiety"
                  height="250px"
                />
              </div>
              <div className="col-6">
                <BlogCard
                  imageUrl="/images/blog3.jpg"
                  date="February 13,2024"
                  title2="Holiday Blues: Recognizing and Overcoming Seasonal Depression"
                  buttonText="Anxiety"
                  height="250px"
                />
              </div>
              <div className="col-12" style={{marginTop: '32px'}}>
                <BlogCard
                  imageUrl="/images/blog4.jpg"
                  date="February 11,2024"
                  title2="Managing Anger: Strategies for Dealing with Anger Management Issues"
                  buttonText="Depression"
                  height="250px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
