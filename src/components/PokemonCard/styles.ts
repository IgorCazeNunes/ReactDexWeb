import styled, { css } from 'styled-components';

import { TPokemonType } from 'components/TypeBadge';

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  height: 14rem;
`;

export const Content = styled.section<{ type: TPokemonType }>`
  ${({ theme, type }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 11.5rem;
    gap: ${theme.spacings.xxsmall};

    padding: ${theme.spacings.xsmall};

    background: ${theme.colors.type.background[type] ||
    theme.colors.type.background['normal']};
    border-radius: ${theme.border.radius};

    img {
      width: 13rem;
      height: 13rem;

      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const MainContent = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${theme.colors.text.number};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.bold};

    h3 {
      color: ${theme.colors.text.white};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.bold};

      margin-bottom: ${theme.spacings.xxsmall};
    }

    ul {
      display: flex;
      flex-direction: row;
      gap: ${theme.spacings.xxsmall};

      list-style: none;
    }
  `}
`;
