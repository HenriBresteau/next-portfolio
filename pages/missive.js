import { Container, Heading } from '@chakra-ui/react'

const Missive = () => {
  return (
    <Container>
      <Heading as="h2" fontSize={24} mb={4}>
        Missive
      </Heading>

      <div
        className="box box-collapsable box-collapsable--opened"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.92)',
          borderRadius: '6px'
        }}
      >
        <div className="box-header columns-middle">
          <span className="margin-right-small">
            <i className="icon icon-menu-right">&rsaquo;</i>
          </span>
          <h2
            className="column-grow ellipsis text-xlarge"
            style={{ fontSize: '24px' }}
          >
            Offres / Commandes
          </h2>
        </div>
        <div
          className="box-content margin"
          style={{ border: '1px solid gray', borderRadius: '6px' }}
        >
          <div className="columns-justify">
            <h3 className="text-normal text-a padding-right-xlarge text-700">
              Offre 11180
            </h3>
            <span className="text-xsmall	text-d"></span>CHF 895.82</span>
          </div>
        </div>
      </div>
      <div
        className="box box-collapsable"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.92)',
          borderRadius: '6px'
        }}
      >
        <div className="box-header columns-middle">
          <span className="margin-right-small">
            <i className="icon icon-menu-right">&rsaquo;</i>
          </span>
          <h2
            className="column-grow ellipsis text-xlarge"
            style={{ fontSize: '24px' }}
          >
            Positions (1)
          </h2>
        </div>
      </div>
    </Container>
  )
}
export default Missive
