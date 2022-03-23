import { Code, Lnk } from '../../components/post/reExport';
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />
}

function Cmpt(props) {
  return (
    <main>
      <div className="bkg" style={{ backgroundImage: props.backgroundImage }}>
        <div className="glass">
          <h3>Glass style</h3>
          <input type="text" placeholder="search" />
          <div className="container">
            <div className="card">Card 1</div>
            <div className="card">Card 2</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .bkg {
          height: 500px;
          background-color: transparent;
          background-image: linear-gradient(to right top, #65dfc9, #6cdbeb);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        h3 {
          color: #426696;
          font-weight: 600;
          font-size: 20px;
          opacity: 0.8;
          margin: 10px;
        }
        input {
          background-color: transparent;
          background-image: linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.7)
          );
          border: none;
          width: 50%;
          padding: 6px;
          border-radius: 4px;
          margin: 10px;
        }
        .glass {
          height: 80%;
          width: 80%;
          border-radius: 10px;
          background-image: linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.3)
          );
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          align-items: center;
        }
        .card {
          background-image: linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0.5)
          );
          border-radius: 10px;
          height: 30%;
          width: 80%;
          margin: 20px;
          box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);
          padding: 10px;
          color: #426696;
        }
      `}</style>
    </main>
  )
}

export const postObj = {
  title: 'glass style',
  date: '2021.11.19',
  tags: ['CSS'],
  description: 'Glass style in CSS',
  body: (
    <>
      <p>
        Just watched a nice <Lnk path="https://www.youtube.com/watch?v=O7WbVj5apxU">video</Lnk> how
        to make a glassy element with CSS. Let's replicate.
      </p>

      <Code>{`
      function Cmpt() {
          return (
            <Div>
              <div className="bkg"> 
                <div className="glass">
                  <H3>Glass style</H3>
                  <input type="text" placeholder="search" />
                  <div className="container">
                    <div className="card">Card 1</div>
                    <div className="card">Card 2</div>
                  </div>
                </div>
              </div>
            </Div>
          )
        }
        
        const Div = styled.div \`
          .bkg {
            height: 500px;
            background-color: transparent;
            background-image: linear-gradient(to right top, #65dfc9, #6cdbeb);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          H3 {
            color: #426696;
            font-weight: 600;
            font-size: 20px;
            opacity: .8;
            margin: 10px;
          }
          input {
            background-color: transparent;
            background-image: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.7) );
            border: none;
            width: 50%;
            padding: 6px;
            border-radius: 4px;
            margin: 10px;
          }
          .glass {
            height: 80%;
            width: 80%;
            border-radius: 10px;
            background-image: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3) );
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            align-items: center;
        
          }
          .card {
            background-image: linear-gradient(to right bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.5) );
            border-radius: 10px;
            height: 30%;
            width: 80%;
            margin: 20px;
            box-shadow: 6px 6px 20px rgba(122,122,122,0.2);
            padding: 10px;
            color: #426696;
          }
          \`
      `}</Code>

      <Cmpt backgroundImage="linear-gradient(to right top, #65dfc9, #6cdbeb)" />

      <p> Manipulate the parent background color to have different glassy styles. </p>

      <Cmpt backgroundImage="linear-gradient(to right top, #545454,#a5a5a5)" />
    </>
  ),
}
