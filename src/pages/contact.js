import React from "react";
import Layout from "../components/layout";
import ContactsPage from '../components/contact/contactsPage';
import MapComponent from '../components/contact/mapComponent';

const ContactPage = (props) => {
  return (
      <Layout>
        <ContactsPage />
        <MapComponent />
      </Layout>
  );
}

export default ContactPage;
