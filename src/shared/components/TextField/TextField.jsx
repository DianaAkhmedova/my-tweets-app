import styles from './TextField.module.scss';

const TextField = ({ label, handleChange, ...props }) => {
  return (
    <div>
      <label className={styles.label}>
        {label} <input onChange={handleChange} {...props} />
      </label>
    </div>
  );
};

export default TextField;
