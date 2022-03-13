import styled from "styled-components";

interface CheckboxProps {
  children: React.ReactNode;
}

export default function Checkbox({ children }: CheckboxProps) {
  return (
    <CheckboxEl>
      <label className="label">
        <input type="checkbox" className="visually-hidden" />
        <span className="label-text">{children}</span>
      </label>
    </CheckboxEl>
  );
}

const CheckboxEl = styled.p`
  position: relative;
  padding-left: 26px;
  letter-spacing: -1px;

  & + & {
    margin-top: 15px;
  }

  .label-text {
    font-size: 13px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid #ced3d7;
    }

    &::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 2px;
      display: none;
      width: 14px;
      height: 11px;
      background: url("/images/checked.svg") no-repeat 0 0;
      background-size: contain;
    }
  }

  input:checked + .label-text::after {
    display: block;
  }
`;