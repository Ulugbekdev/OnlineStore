import Head from 'next/head';
import { createRef, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import cs from 'classnames';
import { getLocalDataUser } from '../lib/getLocalData';
import { addNotes, delNotes, getNotes } from '../redux/reducers/notesReducer';
import Main from '../components/Main/Main';
import notesStyle from '../styles/Notes.module.scss';

export default function Notes() {
	const [dateVal, setDateVal] = useState('');
	const [notesVal, setNotesVal] = useState('');
	const userId = useAppSelector(state => state.loginPage.userId);
	const notes = useAppSelector(state => state.notesPage.notes);
	const dispatch = useAppDispatch();
	const errorVal = createRef<HTMLSpanElement>();

	useEffect(() => {
		const userData = getLocalDataUser();
		dispatch(getNotes(userData.id));
	}, []);

	const submitEvent = (e) => {
		e.preventDefault();

		if (dateVal === '' || notesVal === '') return (errorVal.current.innerHTML = 'all fields are required');

		const newData = {
			id: userId,
			date: dateVal,
			text: notesVal,
		};

		dispatch(addNotes(newData)).then(() => dispatch(getNotes(userId)));
		setDateVal('');
		setNotesVal('');
	};

	const deleteEvent = (e) => {
		const delTextVal = e.target.parentNode.previousElementSibling.previousElementSibling.innerHTML;
		const delDateVal = e.target.parentNode.previousElementSibling.innerHTML;
		const newData = {
			id: userId,
			date: delDateVal,
			text: delTextVal,
		};
		dispatch(delNotes(newData)).then(() => dispatch(getNotes(userId)));
	};

	const arrayNotes = notes && notes.map((el: any, index) => {
		return (
			<li key={index} className={notesStyle.notes__listItem}>
				<ul
					className={cs(notesStyle.notes__list, notesStyle.notes__list_inner)}
				>
					<li className={notesStyle.notes__listText}>{el.notes}</li>
					<li className={notesStyle.notes__listDate}>{el.date}</li>
					<li>
						<button className={notesStyle.notes__listBtn} onClick={(e) => deleteEvent(e)}>
							DELETE
						</button>
					</li>
				</ul>
			</li>
		);
	});

	return (
		<>
			<Head>
				<title>Notes</title>
			</Head>
			<Main>
				<div className={notesStyle.notes}>
					<form
						className={notesStyle.notes__form}
						onSubmit={(e) => submitEvent(e)}
					>
						<input
							className={notesStyle.notes__formItem}
							type={'date'}
							value={dateVal}
							onChange={(e) => setDateVal(e.target.value)}
						/>
						<textarea
							className={notesStyle.notes__formItem}
							placeholder='Notes...'
							value={notesVal}
							onChange={(e) => setNotesVal(e.target.value)}
						/>
						<span className={notesStyle.notes__formError} ref={errorVal} />
						<button className={notesStyle.notes__formBtn}>Add notes</button>
					</form>
					<ul className={notesStyle.notes__list}>{arrayNotes}</ul>
				</div>
			</Main>
		</>
	);
}