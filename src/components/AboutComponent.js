import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


// function About(props) {

    // const leaders = props.leaders.map((leader) => {
    //     return (
    //         <p>Leader {leader.name}</p>
    //     );
    // });

  class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaders: [
                {
                    id: 0,
                    name: 'Peter Pan',
                    image: '/assets/images/alberto.png',
                    designation: 'Chief Epicurious Officer',
                    abbr: 'CEO',
                    featured: false,
                    description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
                  },
                  {
                    id: 1,
                    name: 'Dhanasekaran Witherspoon',
                    image: '/assets/images/alberto.png',
                    designation: 'Chief Food Officer',
                    abbr: 'CFO',
                      featured: false,
                    description: 'Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!'
                  },
                  {
                    id: 2,
                    name: 'Agumbe Tang',
                    image: '/assets/images/alberto.png',
                    designation: 'Chief Taste Officer',
                    abbr: 'CTO',
                      featured: false,
                    description: 'Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick.'
                  },
                  {
                    id: 3,
                    name: 'Alberto Somayya',
                    image: '/assets/images/alberto.png',
                    designation: 'Executive Chef',
                    abbr: 'EC',
                    featured: true,
                    description: 'Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!'
                  }
            ],
  };
}

 render() {
    const leader = this.state.leaders.map((leader) => {
       
        console.log('About Component render is invoked');

        return (
          <div key={leader.id} className="col-12 mt-5">
            <Media tag="li">
              <Media left middle>
                  <Media object src={leader.image} alt={leader.name} />
              </Media>
              <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <Media >{leader.designation}</Media><br />
                <p>{leader.description}</p>
              </Media>
            </Media>
          </div>
        );
    });


    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leader}
                    </Media>
                </div>
            </div>
        </div>
    );
}
  }
export default About;    