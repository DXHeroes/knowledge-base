import { message, warn, fail, markdown, danger } from 'danger';
import fetch from 'node-fetch';
import path from 'path';
import fs from 'fs';

const validate = async () => {
  const validateArticle = async (article_path: any) => {
    const body = fs.readFileSync(path.resolve(__dirname, article_path));

    try {
      const response = await fetch(
        process.env.KB_VALIDATION_URL || 'setTheUrl',
        {
          method: 'post',
          body: JSON.stringify({
            repo_path: article_path,
            content: body.toString(),
          }),
          headers: {
            'Content-Type': 'application/json',
            'X-DX-Auth': `${process.env.X_DX_AUTH_HEADER}`,
            Authorization: `${process.env.AUTH_BASE64}`,
          },
        },
      );
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const changedMds = [
    ...danger.git.created_files,
    ...danger.git.modified_files,
  ].filter(path => path.match(/(problems|practices)\/.*\.md/));

  for (const mdFile of changedMds) {
    const validationResult: ValidationResult = await validateArticle(mdFile);

    for (const info of validationResult.infos) {
      message(info, mdFile);
    }
    for (const warning of validationResult.warns) {
      warn(warning, mdFile);
    }
    for (const failure of validationResult.fails) {
      fail(failure, mdFile);
    }

    if (validationResult.fails.length == 0) {
      message(
        'See preview of the article at [https://preview.developerexperience.io/](https://preview.developerexperience.io/)',
      );
    }
  }
};

validate()
  .then(res => {
    res;
  })
  .catch(error => {
    console.error(error);
    warn('Something is wrong. The validation failed with server error.');
  });
//validation result
interface ValidationResult {
  infos: string[];
  warns: string[];
  fails: string[];
}
