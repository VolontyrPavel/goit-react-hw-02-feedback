import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
    <Section title="Please leave feedback"></Section>
    </>
  );
};
