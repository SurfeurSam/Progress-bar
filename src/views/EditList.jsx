const React = require('react');
const Layout = require("./Layout")
const EditShablon = require("./EditShablon")
module.exports = function EditList({ CoopersShow, userSession, nameUser }) {
  return (
    <Layout userSession={userSession}>
      <script src='/js/edit.form.js' defer />
        <div>
            <div className="containerDiv">   
                <EditShablon el={CoopersShow} us={nameUser}/>
            </div>
        </div>
    </Layout>
  )
};
