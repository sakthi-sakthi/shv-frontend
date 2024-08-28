import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";
function History() {
  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <a href="/history">History</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp; </Link>
            <span className="pagename">History</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">History of the Church</h3>
        <div className="row">
          <div className="col-lg-12 text-justify">
            <p>
              The parochial church of Valarpuram was the under the jurisdiction
              of the Padroado diocese of Madras-­Mylapore. The construction of
              the Church commenced in 1830 and was complete in 1850. The Church
              was officially raised to an independent parish in 1845. The survey
              undertaken by Mr. Clison in 1859 had recorded that there were 508
              Catholic Christians were practicing Catholicism in the locality.
            </p>
            <p>
              Since 1886, the parish of Valarpuram was under the patronage of
              the Archdiocese of Mylapore. The parish of Valarpuram proudly
              records in its chronicles three special events, namely, Rev. Fr.
              Lobo who had relentlessly served the parish for a long duration of
              thirty years. Most. Rev. Balasamy who served as bishop of Nellore,
              Andhra Pradesh hails from this parish and it has begotten 11
              priests and 15 religious nuns. Such events visibly point out on
              how the church has spiritually grown strong and become a true
              witness in living the faith.
            </p>
            <p>
              Rev. Fr. Divyanathan, the parish priest had constructed a new
              church in 1985. The parish of Valarpuram has come under the
              jurisdiction of the diocese of Chingleput when it was declared as
              an independent new diocese by His Holiness Pope John Paul II on
              the 19th July, 2002. Rev. Fr. Joseph Sengol, IVO put up the new
              church building in 2012.
            </p>
            <p>
              The parish that experienced poverty and starvation once has grown
              up and found prosperity leaps and bounds today by means of
              agricultural techniques, many companies of various fields and
              advent of many polytechnic colleges and research centers in and
              around the region.
            </p>
            <p>
              By the conduct of good Christian life with deep faith in God they
              worship and theft persevering hard work. the parishioners of
              Valarpuram are indeed happy to witness a historical milestone –
              Platinum Jubilee gladly lauding, “Unless the Lord builds the
              house. those who build it labor in vain. Unless the Lord guards
              the city, the guard keeps watch in vain.” (Psalm 127:1)
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default History;
