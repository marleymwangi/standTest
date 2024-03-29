import Layout from "../layout";
//css
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
//messaging
import Notification from "../components/elements/ToastNotifications";
import { ProvideAuth } from "../context/authContext";
import { ProvideData } from "../context/dataContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
      <ProvideAuth>
        <ProvideData>
          <Layout>
            <Notification>
              <Component {...pageProps} />
            </Notification>
          </Layout>
        </ProvideData>
      </ProvideAuth>
  );
}

export default MyApp;
