import styled from "styled-components";
import { changeEventType } from "types/common";

interface RadioProps {
  children: React.ReactNode;
  name: string;
  value: string | number;
  handleChange: changeEventType;
}

const Radio = ({ children, name, value, handleChange }: RadioProps) => {
  return (
    <RadioEl>
      <label className="label">
        <input
          type="radio"
          name={name}
          value={value}
          onChange={handleChange}
          className="visually-hidden"
        />
        <span className="label-text">{children}</span>
      </label>
    </RadioEl>
  );
};
export default Radio;

const RadioEl = styled.p`
  position: relative;
  display: inline-block;
  padding-left: 26px;
  letter-spacing: -1px;

  & + & {
    margin-left: 37px;
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
      border-radius: 50%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 5px;
      left: 5px;
      display: none;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  input:checked + .label-text::after {
    display: block;
  }
`;
