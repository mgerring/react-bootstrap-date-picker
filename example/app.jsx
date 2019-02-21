import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Form,
  Nav
} from 'react-bootstrap';

import DatePicker from '../src/index.jsx';

const spanishDayLabels = ['Dom', 'Lu', 'Ma', 'Mx', 'Ju', 'Vi', 'Sab'];
const spanishMonthLabels = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];
const wapperDivStyle = { border: '1px solid #ccc' };
const scrollingDivStyle = { padding: '10px', height: '70px', overflow: 'auto' };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date().toISOString(),
      previousDate: null,
      minDate: null,
      maxDate: null,
      focused: false,
      invalid: false
    };
  }
  handleChange(value) {
    this.setState({
      date: value
    });
  }
  handleMinChange(value) {
    this.setState({
      minDate: value
    });
  }
  handleMaxChange(value) {
    this.setState({
      maxDate: value
    });
  }
  handlePlacement() {
    return 'top';
  }
  handleRandomPlacement() {
    const placementKey = Math.floor(Math.random() * 4 + 1);
    switch (placementKey) {
      case 1:
        return 'top';
      case 2:
        return 'left';
      case 4:
        return 'right';
      default:
        return 'bottom';
    }
  }
  handleValidationCheck(e) {
    e.preventDefault();
    this.setState(() => ({
      invalid: false
    }));
  }
  handleInvalidDate(e) {
    e.preventDefault();
    this.setState(() => ({
      invalid: true
    }));
  }
  handleResetValidation(e) {
    e.preventDefault();
    this.setState(() => ({
      invalid: false
    }));
  }

  render() {
    const LabelISOString = new Date().toISOString();
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h1>React-Bootstrap Date Picker</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Navbar>
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link href="https://github.com/pushtell/react-bootstrap-date-picker/blob/master/example/app.jsx">
                    Example Source
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item href="https://github.com/pushtell/react-bootstrap-date-picker">
                  <Nav.Link>Documentation on Github</Nav.Link>
                </Nav.Item>
                <Nav.Item href="https://www.npmjs.com/package/react-bootstrap-date-picker">
                  <Nav.Link>NPM Package</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h2>Change Handler</h2>
          </Col>
          <Col xs={6}>
            <h2>Disabled</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group controlId="change_handler">
              <Form.Label>Change Handler</Form.Label>
              <DatePicker
                onChange={this.handleChange}
                placeholder="Placeholder"
                value={this.state.date}
                id="change_handler_example"
              />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group controlId="disabled">
              <Form.Label>Disabled</Form.Label>
              <DatePicker
                disabled={true}
                onChange={this.handleChange}
                placeholder="Placeholder"
                value={this.state.date}
                id="disabled_example"
              />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group controlId="required">
              <Form.Label>Required</Form.Label>
              <DatePicker
                required
                onChange={this.handleChange}
                placeholder="Placeholder"
                value={this.state.date}
                id="required_example"
              />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h2>Blur and Focus Events</h2>
          </Col>
          <Col xs={6}>
            <h2>Week Starts on Monday</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>
                {this.state.focused ? 'Focused' : 'Blurred'}
              </Form.Label>
              <DatePicker
                onChange={this.handleChange}
                placeholder="Placeholder"
                value={this.state.date}
                onFocus={() => {
                  this.setState({ focused: true });
                }}
                onBlur={() => {
                  this.setState({ focused: false });
                }}
              />
              <Form.Control.Feedback>
                This is {this.state.focused ? 'focused' : 'blurred'}.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Week Starts on Monday</Form.Label>
              <DatePicker
                onChange={this.handleChange}
                weekStartsOn={1}
                placeholder="Placeholder"
                value={this.state.date}
              />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>Styles</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Form.Group>
              <Form.Label>Success</Form.Label>
              <DatePicker placeholder="Placeholder" />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group>
              <Form.Label>Warning</Form.Label>
              <DatePicker placeholder="Placeholder" />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group>
              <Form.Label>Error</Form.Label>
              <DatePicker placeholder="Placeholder" />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>Date Format</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Form.Group>
              <Form.Label>MM/DD/YYYY</Form.Label>
              <DatePicker
                dateFormat="MM/DD/YYYY"
                onChange={this.handleChange}
                value={this.state.date}
              />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group>
              <Form.Label>DD-MM-YYYY</Form.Label>
              <DatePicker
                dateFormat="DD-MM-YYYY"
                onChange={this.handleChange}
                value={this.state.date}
              />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group>
              <Form.Label>YYYY/MM/DD</Form.Label>
              <DatePicker
                dateFormat="YYYY/MM/DD"
                onChange={this.handleChange}
                value={this.state.date}
              />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>Min/Max Dates</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Example Min/Max</Form.Label>
              <DatePicker
                minDate={this.state.minDate}
                maxDate={this.state.maxDate}
                onChange={this.handleChange}
                value={this.state.date}
              />
              <Form.Control.Feedback>
                Sample min/max DatePicker using configured values
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={3}>
            <Form.Group>
              <Form.Label>Min</Form.Label>
              <DatePicker
                onChange={this.handleMinChange}
                value={this.state.minDate}
              />
              <Form.Control.Feedback>
                {'Configure Example minDate'}
              </Form.Control.Feedback>
              <Form.Control.Feedback>{`value: ${
                this.state.minDate
              }`}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={3}>
            <Form.Group>
              <Form.Label>Max</Form.Label>
              <DatePicker
                onChange={this.handleMaxChange}
                value={this.state.maxDate}
              />
              <Form.Control.Feedback>
                {'Configure Example maxDate'}
              </Form.Control.Feedback>
              <Form.Control.Feedback>{`value: ${
                this.state.maxDate
              }`}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h2>Show Week Numbers</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Form.Group controlId="show_weeks">
              <Form.Label>Show Weeks</Form.Label>
              <DatePicker
                onChange={this.handleChange}
                placeholder="Placeholder"
                value={this.state.date}
                id="show_dates_example"
                showWeeks={true}
              />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h2>Validation</h2>
          </Col>
        </Row>
        <Row>
          <Form onSubmit={this.handleValidationCheck}>
            <Col xs={6}>
              <Form.Group controlId="custom_validation_example_default">
                <Form.Label>Default</Form.Label>
                <DatePicker
                  onChange={this.handleChange}
                  placeholder="Placeholder"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="custom_validation_example_oninvalid">
                <Form.Label>onInvalid override</Form.Label>
                <DatePicker
                  onChange={this.handleChange}
                  placeholder="Placeholder"
                  onInvalid={this.handleInvalidDate}
                  required
                />
                {this.state.invalid && (
                  <Form.Control.Feedback>
                    You must pick a date.
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Button type="submit">Validate</Button>
              <Button type="button" onClick={this.handleResetValidation}>
                Reset
              </Button>
            </Col>
          </Form>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>Custom</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            {/*
            <Form.Group>
              <Form.Label>Previous / Next Buttons</Form.Label>
              <DatePicker
                placeholder="Placeholder"
                previousButtonElement={<Glyphicon glyph="star" />}
                nextButtonElement={<Glyphicon glyph="star" />}
              />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
              */}
          </Col>
          <Col sm={4}>
            <Form.Group>
              <Form.Label>Padding</Form.Label>
              <DatePicker placeholder="Placeholder" cellPadding="10px" />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group>
              <Form.Label>Day and Month Labels</Form.Label>
              <DatePicker
                placeholder="Placeholder"
                dayLabels={spanishDayLabels}
                monthLabels={spanishMonthLabels}
              />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            {/*
                <Form.Group>
                  <Form.Label>Clear Button</Form.Label>
                  <DatePicker
                    placeholder="Placeholder"
                    clearButtonElement={<Glyphicon glyph="star" />}
                  />
                  <Form.Control.Feedback>Help</Form.Control.Feedback>
                </Form.Group>
               */}
          </Col>
          <Col sm={6}>
            <Form.Group controlId="no_clear_button">
              <Form.Label>No Clear Button</Form.Label>
              <DatePicker placeholder="Placeholder" showClearButton={false} />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>FormControl Style</Form.Label>
              <DatePicker
                style={{ width: '100%', backgroundColor: '#FFEEEE' }}
              />
              <Form.Control.Feedback>
                &#123;width:"100%", backgroundColor:"#FFEEEE"&#125;
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Today Button</Form.Label>
              <DatePicker showTodayButton />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Thursday First Day of Week</Form.Label>
              <DatePicker weekStartsOn={4} />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Control Element</Form.Label>
              <DatePicker customControl={<CustomControl />} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>Placement</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Form.Group>
              <Form.Label>Top</Form.Label>
              <DatePicker placeholder="Placeholder" calendarPlacement="top" />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={3}>
            <Form.Group>
              <Form.Label>Right</Form.Label>
              <DatePicker placeholder="Placeholder" calendarPlacement="right" />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={3}>
            <Form.Group>
              <Form.Label>Bottom</Form.Label>
              <DatePicker
                placeholder="Placeholder"
                calendarPlacement="bottom"
              />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={3}>
            <Form.Group>
              <Form.Label>Left</Form.Label>
              <DatePicker placeholder="Placeholder" calendarPlacement="left" />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Placement determined by function</Form.Label>
              <DatePicker
                placeholder="Placeholder"
                calendarPlacement={this.handlePlacement}
              />
              <Form.Control.Feedback>Placed at top</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Random placement</Form.Label>
              <DatePicker
                placeholder="Placeholder"
                calendarPlacement={this.handleRandomPlacement}
              />
              <Form.Control.Feedback>
                Placement is random in either of the four directions
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>Placed in a Scrolling Container</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <h4>Popover in scroll region</h4>
            <div style={wapperDivStyle}>
              <div style={scrollingDivStyle}>
                <DatePicker placeholder="Start Date" />
                <br />
                <DatePicker placeholder="End Date" />
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h4>Popover outside scroll region</h4>
            <div style={wapperDivStyle}>
              <div style={scrollingDivStyle}>
                <DatePicker
                  placeholder="Start Date"
                  calendarContainer={document.body}
                />
                <br />
                <DatePicker
                  placeholder="End Date"
                  calendarContainer={document.body}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>Sizes</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Label</Form.Label>
              <DatePicker placeholder="Placeholder" />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group size="sm">
              <Form.Label>Label</Form.Label>
              <DatePicker placeholder="Placeholder" value={this.state.date} />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Label</Form.Label>
              <DatePicker placeholder="Placeholder" />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Label</Form.Label>
              <DatePicker placeholder="Placeholder" value={this.state.date} />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group size="lg">
              <Form.Label>Label</Form.Label>
              <DatePicker placeholder="Placeholder" />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group size="lg">
              <Form.Label>Label</Form.Label>
              <DatePicker placeholder="Placeholder" value={this.state.date} />
              <Form.Control.Feedback>Help</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    );
  }
}

class CustomControl extends React.Component {
  static displayName = 'CustomControl';

  static propTypes = {
    value: PropTypes.any,
    placeholder: PropTypes.any
  };

  render() {
    const { value, placeholder, ...rest } = this.props;

    return <Button {...rest}>{value || placeholder}</Button>;
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
