import MainLayout from "../layouts/main_layout";
import PostItem from "../components/PostItem";
import "../styles/Home.css"




const Home = () => {

    return (
        <>
            <MainLayout>
                <div className="container bootstrap snippets bootdeys">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-4">
                            <div className="panel rounded shadow">
                                <div className="panel-body">
                                    <div className="inner-all">
                                        <ul className="list-unstyled">
                                            <li className="text-center">
                                                <img
                                                    data-no-retina=""
                                                    className="img-circle img-responsive img-bordered-primary"
                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                    alt="John Doe"
                                                />
                                            </li>
                                            <li className="text-center">
                                                <h4 className="text-capitalize">John Doe</h4>
                                                <p className="text-muted text-capitalize">web designer</p>
                                            </li>
                                            <li>
                                                <a href="" className="btn btn-success text-center btn-block">
                                                    PRO Account
                                                </a>
                                            </li>
                                            <li>
                                                <br />
                                            </li>
                                            <li>
                                                <div className="btn-group-vertical btn-block">
                                                    <a href="" className="btn btn-default">
                                                        <i className="fa fa-cog pull-right" />
                                                        Edit Account
                                                    </a>
                                                    <a href="" className="btn btn-default">
                                                        <i className="fa fa-sign-out pull-right" />
                                                        Logout
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* /.panel */}
                            <div className="panel panel-theme rounded shadow">
                                <div className="panel-heading">
                                    <div className="pull-left">
                                        <h3 className="panel-title">Contact</h3>
                                    </div>
                                    <div className="pull-right">
                                        <a href="#" className="btn btn-sm btn-success">
                                            <i className="fa fa-facebook" />
                                        </a>
                                        <a href="#" className="btn btn-sm btn-success">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#" className="btn btn-sm btn-success">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                {/* /.panel-heading */}
                                <div className="panel-body no-padding rounded">
                                    <ul className="list-group no-margin">
                                        <li className="list-group-item">
                                            <i className="fa fa-envelope mr-5" /> support@bootdey.com
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-globe mr-5" /> www.bootdey.com
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-phone mr-5" /> +6281 903 xxx xxx
                                        </li>
                                    </ul>
                                </div>
                                {/* /.panel-body */}
                            </div>
                            {/* /.panel */}
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-8">
                            <div className="profile-cover">
                                <div className="cover rounded shadow no-overflow">
                                    <div className="inner-cover">
                                        {/* Start offcanvas btn group menu: This menu will take position at the top of profile cover (mobile only). */}
                                        <div className="btn-group cover-menu-mobile hidden-lg hidden-md">
                                            <button
                                                type="button"
                                                className="btn btn-theme btn-sm dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                <i className="fa fa-bars" />
                                            </button>
                                            <ul className="dropdown-menu pull-right no-border" role="menu">
                                                <li className="active">
                                                    <a href="#">
                                                        <i className="fa fa-fw fa-clock-o" /> <span>Timeline</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-fw fa-user" /> <span>About</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-fw fa-photo" /> <span>Photos</span>{" "}
                                                        <small>(98)</small>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-fw fa-users" />
                                                        <span> Friends </span>
                                                        <small>(23)</small>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-fw fa-envelope" /> <span>Messages</span>{" "}
                                                        <small>(7 new)</small>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <img
                                            src="https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg"
                                            className="img-responsive full-width"
                                            alt="cover"
                                            style={{ maxHeight: 200 }}
                                        />
                                    </div>
                                    <ul className="list-unstyled no-padding hidden-sm hidden-xs cover-menu">
                                        <li className="active">
                                            <a href="#">
                                                <i className="fa fa-fw fa-clock-o" /> <span>Timeline</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-fw fa-user" /> <span>About</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-fw fa-photo" /> <span>Photos</span>{" "}
                                                <small>(98)</small>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-fw fa-users" />
                                                <span> Friends </span>
                                                <small>(23)</small>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /.cover */}
                            </div>
                            {/* /.profile-cover */}
                            <div className="divider" />
                            <div className="panel rounded shadow">
                                <form action="...">
                                    <textarea
                                        className="form-control input-lg no-border"
                                        rows={2}
                                        placeholder="What are you doing?..."
                                        defaultValue={""}
                                    />
                                </form>
                                <div className="panel-footer">
                                    <button className="btn btn-success pull-right mt-5">POST</button>
                                    <ul className="nav nav-pills">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-map-marker" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-camera" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-smile-o" />
                                            </a>
                                        </li>
                                    </ul>
                                    {/* /.nav nav-pills */}
                                </div>
                                {/* /.panel-footer */}
                            </div>
                            {/* /.panel */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="panel panel-success rounded shadow">
                                        <div className="panel-heading no-border">
                                            <div className="pull-left half">
                                                <div className="media">
                                                    <div className="media-object pull-left">
                                                        <img
                                                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                            alt="..."
                                                            className="img-circle img-post"
                                                        />
                                                    </div>
                                                    <div className="media-body">
                                                        <a
                                                            href="#"
                                                            className="media-heading block mb-0 h4 text-white"
                                                        >
                                                            John Doe
                                                        </a>
                                                        <span className="text-white h6">on 8th June, 2014</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /.pull-left */}
                                            <div className="pull-right">
                                                <a href="#" className="text-white h4">
                                                    <i className="fa fa-heart" /> 15.5K
                                                </a>
                                            </div>
                                            {/* /.pull-right */}
                                            <div className="clearfix" />
                                        </div>
                                        {/* /.panel-heading */}
                                        <div className="panel-body no-padding">
                                            <img
                                                src="https://www.bootdey.com/image/340x210/"
                                                alt="..."
                                                className="img-responsive full-width"
                                            />
                                            <div className="inner-all block">
                                                view all <a href="#">7 comments</a>
                                            </div>
                                            {/* /.inner-all */}
                                            <div className="line no-margin" />
                                            {/* /.line */}
                                            <div className="media inner-all no-margin">
                                                <div className="pull-left">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                                        alt="..."
                                                        className="img-post2"
                                                    />
                                                </div>
                                                {/* /.pull-left */}
                                                <div className="media-body">
                                                    <a href="#" className="h4">
                                                        John Doe
                                                    </a>
                                                    <small className="block text-muted">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                                                    </small>
                                                    <em className="text-xs text-muted">
                                                        Posted on <span className="text-danger">Dec 08, 2014</span>
                                                    </em>
                                                </div>
                                                {/* /.media-body */}
                                            </div>
                                            {/* /.media */}
                                            <div className="line no-margin" />
                                            {/* /.line */}
                                            <div className="media inner-all no-margin">
                                                <div className="pull-left">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                                        alt="..."
                                                        className="img-post2"
                                                    />
                                                </div>
                                                {/* /.pull-left */}
                                                <div className="media-body">
                                                    <a href="#" className="h4">
                                                        John Doe
                                                    </a>
                                                    <small className="block text-muted">
                                                        Quaerat, impedit minus non commodi facere doloribus nemo ea
                                                        voluptate nesciunt deleniti.
                                                    </small>
                                                    <em className="text-xs text-muted">
                                                        Posted on <span className="text-danger">Dec 08, 2014</span>
                                                    </em>
                                                </div>
                                                {/* /.media-body */}
                                            </div>
                                            {/* /.media */}
                                        </div>
                                        {/* /.panel-body */}
                                        <div className="panel-footer">
                                            <form action="#" className="form-horizontal">
                                                <div className="form-group has-feedback no-margin">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Your comment here..."
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="btn btn-theme fa fa-search form-control-feedback"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.panel-footer */}
                                    </div>
                                    {/* /.panel */}
                                </div>



                                <PostItem></PostItem>
                                <div className="col-md-6">
                                    <div className="panel panel-success rounded shadow">
                                        <div className="panel-heading no-border">
                                            <div className="pull-left half">
                                                <div className="media">
                                                    <div className="media-object pull-left">
                                                        <img
                                                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                                            alt="..."
                                                            className="img-circle img-post"
                                                        />
                                                    </div>
                                                    <div className="media-body">
                                                        <a
                                                            href="#"
                                                            className="media-heading block mb-0 h4 text-white"
                                                        >
                                                            John Doe
                                                        </a>
                                                        <span className="text-white h6">on 8th June, 2014</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /.pull-left */}
                                            <div className="pull-right">
                                                <a href="#" className="text-white h4">
                                                    <i className="fa fa-heart" /> 15.5K
                                                </a>
                                            </div>
                                            {/* /.pull-right */}
                                            <div className="clearfix" />
                                        </div>
                                        {/* /.panel-heading */}
                                        <div className="panel-body no-padding">
                                            <div className="inner-all block">
                                                <h4>Upload on my album :D</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Expedita, iste omnis fugiat porro consequuntur ratione iure
                                                    error reprehenderit cum est ab similique magnam molestias
                                                    aperiam voluptatibus quia aliquid! Sed, minima.
                                                </p>
                                                <blockquote className="mb-10">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                                                    delectus!
                                                </blockquote>
                                                <img
                                                    data-no-retina=""
                                                    src="https://www.bootdey.com/image/340x210/"
                                                    alt="..."
                                                    width={100}
                                                />
                                                <img
                                                    data-no-retina=""
                                                    src="https://www.bootdey.com/image/340x210/"
                                                    alt="..."
                                                    width={100}
                                                />
                                                <img
                                                    data-no-retina=""
                                                    src="https://www.bootdey.com/image/340x210/"
                                                    alt="..."
                                                    width={100}
                                                />
                                            </div>
                                            {/* /.inner-all */}
                                            <div className="inner-all bg-success">
                                                view all <a href="#">7 comments</a>
                                            </div>
                                        </div>
                                        {/* /.panel-body */}
                                        <div className="panel-footer no-padding no-border">
                                            <div className="media inner-all no-margin">
                                                <div className="pull-left">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                        alt="..."
                                                        className="img-post2"
                                                    />
                                                </div>
                                                {/* /.pull-left */}
                                                <div className="media-body">
                                                    <a href="#" className="h4">
                                                        John Doe
                                                    </a>
                                                    <small className="block text-muted">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                                                    </small>
                                                    <em className="text-xs text-muted">
                                                        Posted on <span className="text-danger">Dec 08, 2014</span>
                                                    </em>
                                                </div>
                                                {/* /.media-body */}
                                            </div>
                                            {/* /.media */}
                                            <div className="line no-margin" />
                                            {/* /.line */}
                                            <div className="media inner-all no-margin">
                                                <div className="pull-left">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                                        alt="..."
                                                        className="img-post2"
                                                    />
                                                </div>
                                                {/* /.pull-left */}
                                                <div className="media-body">
                                                    <a href="#" className="h4">
                                                        John Doe
                                                    </a>
                                                    <small className="block text-muted">
                                                        Quaerat, impedit minus non commodi facere doloribus nemo ea
                                                        voluptate nesciunt deleniti.
                                                    </small>
                                                    <em className="text-xs text-muted">
                                                        Posted on <span className="text-danger">Dec 08, 2014</span>
                                                    </em>
                                                </div>
                                                {/* /.media-body */}
                                            </div>
                                            {/* /.media */}
                                            <div className="line no-margin" />
                                            {/* /.line */}
                                            <form action="#" className="form-horizontal inner-all">
                                                <div className="form-group has-feedback no-margin">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Your comment here..."
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="btn btn-theme fa fa-search form-control-feedback"
                                                    />
                                                </div>
                                            </form>
                                            {/* /.form-horizontal */}
                                        </div>
                                        {/* /.panel-footer */}
                                    </div>
                                    {/* /.panel */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </MainLayout>
        </>
    )
}


export default Home;