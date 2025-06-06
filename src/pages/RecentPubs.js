// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import PublicationCard from "../components/PublicationCard";  
// import { Link } from "react-router-dom";

// const RecentPubs = () => {
//     const backStyle = {
//         color: 'white',
//         backgroundColor: 'rgb(33, 37, 37)',
//         padding: '6vh 10vh',
//     };

//     return (
//         <div style={backStyle}>
//             <Container>
//                 <h1 className="text-center mb-4">Latest Publications</h1>
//                 <Row>
//                     {/* First Column */}
//                     <Col>
//                         <PublicationCard
//                             title="Publication 1 name"
//                             description="Publication 1 description goes here."
//                             date="2021-10-01"
//                         />
//                         <PublicationCard
//                             title="Publication 2 name"
//                             description="Publication 2 description goes here."
//                             date="2021-09-15"
//                         />
//                         <PublicationCard
//                             title="Publication 3 name"
//                             description="Publication 3 description goes here."
//                             date="2021-09-10"
//                         />
//                     </Col>
                
//                     {/* Second Column */}
//                     <Col>
//                         <PublicationCard
//                             title="Publication 4 name"
//                             description="Publication 4 description goes here."
//                             date="2021-09-01"
//                         />
//                         <PublicationCard
//                             title="Publication 5 name"
//                             description="Publication 5 description goes here."
//                             date="2021-08-25"
//                         />
//                         <PublicationCard
//                             title="Publication 6 name"
//                             description="Publication 6 description goes here."
//                             date="2021-08-20"
//                         />
//                     </Col>
//                 </Row>
                
//                 {/* Button to navigate to All Publications */}
//                 <div className="text-right mt-4">
//                     <Button variant="outline-light"> <Link to="/publications" style={{ color: "white", textDecoration: "none"}}>All Publications →</Link>
                        
//                     </Button>
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default RecentPubs;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PublicationCard from "../components/PublicationCard";  
import { Link } from "react-router-dom";

// Import the local JSON file
import publicationsData from "../data/publications.json"; 

const RecentPubs = () => {
    const sortedPublications = publicationsData.articles
    ? publicationsData.articles.map(article => ({
        title: article.title,
        description: article.publication,
        date: article.year ? `${article.year}` : "N/A",
        link: article.link,
      })).sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4) // Only the top 4
    : [];

  const backStyle = {
    color: 'white',
    backgroundColor: 'rgb(33, 37, 37)',
    padding: '6vh 10vh',
  };

  return (
    <div style={backStyle}>
      <Container>
        <h1 className="text-center mb-4">Latest Publications</h1>
        <Row>
          {/* First Column */}
          <Col>
            {sortedPublications.slice(0, 2).map((pub, index) => (
              <PublicationCard
                key={index}
                title={pub.title}
                description={pub.description}
                date={pub.date}
                link={pub.link}
              />
            ))}
          </Col>

          {/* Second Column */}
          <Col>
            {sortedPublications.slice(2, 4).map((pub, index) => (
              <PublicationCard
                key={index + 3}
                title={pub.title}
                description={pub.description}
                date={pub.date}
                link={pub.link}
              />
            ))}
          </Col>
        </Row>

        {/* Button to navigate to All Publications */}
        <div className="text-right mt-4">
          <Button variant="outline-light">
            <Link to="/publications" style={{ color: "white", textDecoration: "none" }}>
              All Publications →
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default RecentPubs;