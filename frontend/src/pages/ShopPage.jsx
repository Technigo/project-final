import styled from "styled-components"
import { ToHomepageBtn } from "../components/ToHomepageBtn"

export const ShopPage = () => {
  return (
    <Container>
      <Title>Virtual Ticket Booth</Title>
      <TicketBooth>
        <TicketContent>
          <Message>
            We're delighted that you're interested in exploring museums through
            MuSeek! However, as much as we'd love to provide real tickets, this
            is merely a school project. If you've found a fascinating museum via
            MuSeek, we recommend visiting the official website for ticket
            purchases. Thank you for your curiosity!
          </Message>
        </TicketContent>
        <ToHomepageBtn />
      </TicketBooth>
    </Container>
  )
}

const Container = styled.div`
  padding: 80px 20px 20px 20px;
  text-align: center;

  a {
    color: #0056b3;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #007bff;
  }
`

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`

const TicketBooth = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
`

const TicketContent = styled.div`
  position: relative;
  z-index: 2;
`

const Message = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`
