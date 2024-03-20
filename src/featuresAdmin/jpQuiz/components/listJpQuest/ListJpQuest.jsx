import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListJpQuest.module.css'
import ListAnwser from '../listAnswer/ListAnswer';
import { Link, useParams } from 'react-router-dom';


ListJpQuest.propTypes = {

};

function ListJpQuest(props) {

    const { levelId } = useParams();
    const { roomId } = useParams();

    const { Jpquest } = props;

    return (
        <div>
            <div className={styles.body}>


                <div className={styles.container}>
                    <h2>Japanese Quiz</h2>

                    <Link to={`/jplevel-admin/${levelId}/jproom/${roomId}/Quiz-japan/insert`}>Thêm Quiz</Link>
                    <Link to={`/jplevel-admin/${levelId}/jproom`}>Back</Link>

                    {Jpquest.map(Jpquests => (
                        <div className={styles.question}>

                            <h3>{Jpquests.content}</h3>

                            <div className={styles.container_answer}>
                                <ListAnwser questionId={Jpquests.id} />
                            </div>

                            <div className={styles.container_suggest}>
                                <p>{Jpquests.suggest}</p>
                            </div>


                            <div className={styles.action_buttons}>
                                <a >Edit</a>
                                <a >Delete</a>

                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default ListJpQuest;