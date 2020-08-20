import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: all 0.4s;
    backface-visibility: hidden;
  }
  /* Initial State of the entered Dot */
  /* flipping it on its back */
  .count-enter {
    transform: rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: rotateX(0.5turn);
  }
`;

const Dot = styled.div`
  background-color: ${props => props.theme.lightgrey};
  border-radius: 50%;
  padding: 0.5rem;
  min-width: 3rem;
  margin-left: 1rem;
  line-height: 2.2rem;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
  color: ${props => props.theme.medPurple};
  font-size: .9em;
  font-weight: 600;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;
//font font-feature-settings and font-variant-numeric give the same width to the number no matter the size of the number ie: '1' and '2 is printed on the screen as the same width

const CartCount = ({ count }) => (
  <AnimationStyles>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="count"
        classNames="count"
        key={count}
        timeout={{ enter: 4000, exit: 4000 }}
      >
        <Dot className="cart-count">{count}</Dot>
      </CSSTransition>
    </TransitionGroup>
  </AnimationStyles>
);

export default CartCount;