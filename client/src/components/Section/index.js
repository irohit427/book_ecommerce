import React from 'react'
import { Card } from 'antd';
import { Button } from 'antd';
import './Section.scss';

const Section = () => {
  const { Meta } = Card;
  return (
    <div className="section-container">
      <div className="leftSlider">
        <Button shape="circle">
          <span className="fa fa-arrow-left">&#8592;</span>
        </Button>
      </div>
      <div className="sectionBody">  
        <div className="heading">
          <p>Best Seller</p>
          <span><a>See More</a></span> 
        </div>
        <div className="sectionItems">
          <Card hoverable style={{ width: 200 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card hoverable style={{ width: 200 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card hoverable style={{ width: 200 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card hoverable style={{ width: 200 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      </div>
      <div className="rightSlider">
        <Button shape="circle">
          <span>&#8594;</span>
        </Button>
      </div>
    </div>
  )
}

export default Section;
