
import React from 'react';
import styles from './styles.module.scss'; 

const TermsPage: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentContainer}>
        <h1>Terms and Conditions</h1>

        <p>
          Welcome to Questify. By using our service, you agree to comply with
          and be bound by the following terms and conditions.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this site, you accept and agree to be bound by
          the terms and provision of this agreement.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials
          for personal, non-commercial transitory viewing only.
        </p>

        <h2>3. User Conduct</h2>
        <p>
          Users agree to use the service for lawful purposes only and not to
          engage in any activity that disrupts or interferes with the service.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          In no event shall Questify or its suppliers be liable for any damages
          arising out of the use or inability to use the materials.
        </p>

        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time without prior
          notice.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at
          support@questify.com.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
