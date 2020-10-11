import React from 'react'
import BlogCard from '../BlogCard';
import './BlogSection.scss'

const BlogSection = () => {
  const data = [
    {
      index: 1,
      title: 'Best Books of 2019',
      description: 'If you need a new book to add to your reading list, look no further than thisroundup of the best books that came out this year. We\'ve been spoiled with amazing reads lately, so if you\'re in the market for a hot-off the presses page-turner in any genre yo can imagine, we\'ve revealed the best books 2019 has to offer.',
      imgUrl: 'https://www.clm24.es/media/clm24/images/2020/06/19/2020061910123286514.jpg'
    },
    {
      index: 2,
      title: 'Why You Should Read Every Day',
      description: 'When was the last time you read a book, or a substantial magazine article? Do your daily reading habits center around tweets, Facebook updates, or the directions, or the directions on your instant oatmeal packet? Reading has a significant number of benefits, and here\'re 10 benefits of reading to get you to start reading.',
      imgUrl: 'https://media.fromthegrapevine.com/assets/images/2017/7/reading-book.jpg'
    }
  ];

  return (
    <div className="blogSection">
      {
        data.map((b) => 
          <BlogCard index={b.index} title={b.title} description={b.description} imgUrl={b.imgUrl} />
        )
      }  
    </div>
  )
}

export default BlogSection;
